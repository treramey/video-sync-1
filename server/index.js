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
  http = require("http"),
  server = http.createServer(app),
  io = socket(server);

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
  console.log("We have a new connection");

  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

//<===============Auth Endpoints==========================>

app.post("/api/auth/register", auth.register);
app.post("/api/auth/login", auth.login);
app.get("/api/auth/logout", auth.logout);
//<=======================================================>

app.put("/api/update/:id", auth.isAuthenticated, main.update);
app.put("/api/update/password/:id", main.updatePassword);

server.listen(PORT, () =>
  console.log(`The Server is running on port ${SERVER_PORT}✅`)
);
