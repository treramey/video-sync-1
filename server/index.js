require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  socket = require("socket.io"),
  auth = require("./Controllers/authController"),
  main = require("./Controllers/mainController"),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
  PORT = SERVER_PORT || 5050,
  app = express(),
  io = socket(
    app.listen(PORT, () =>
      console.log(`The Server is running on port ${SERVER_PORT}✅`)
    )
  ),
  {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom,
  } = require("./Controllers/users");

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then(db => {
    app.set("db", db);
    console.log("The Satellite connected 🛰️ , Database conection is good 📡");
  })
  .catch(err => {
    console.log(`Server Did NOT Connect ❌ ${err}`);
  });

io.on("connection", socket => {
  socket.on("join", ({ name, email, room }, callback) => {
    let { error, user } = addUser({ id: socket.id, name, email, room });
    console.log("this is line 52", user);
    if (error) return callback(error);
    socket.join(user.room);
    socket.emit("message", { user: "Admin", body: `${user.name} has joined!` });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", body: `${user.name} has joined` });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      user: { name: user.name, avatar: "" },
      body: message,
    });
    callback();
  });
  socket.on("disconnect", () => {
    console.log("disconnect is hit");
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        body: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

//<===============Auth Endpoints==========================>

app.post("/api/auth/register", auth.register);
app.post("/api/auth/login", auth.login);
app.get("/api/auth/logout", auth.logout);
//<=======================================================>

app.put("/api/update/:id", auth.isAuthenticated, main.update);
app.put("/api/update/password/:id", main.updatePassword);
