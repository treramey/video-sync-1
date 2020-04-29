const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    //function setup
    const { firstName, lastName, email, password } = req.body,
      db = req.app.get("db");
    //check for existing user
    const foundUser = await db.users.check_user(email);
    if (foundUser[0]) {
      return res.status(400).send({
        message: "Email already in use",
      });
    }

    //password hash and create user
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    const newUser = await db.users.register_user(
      firstName,
      lastName,
      email,
      hash
    );
    req.session.user = newUser[0];
    // console.log(req);
    res.status(202).send(req.session.user);
  },
  login: async (req, res) => {
    const { email, password } = req.body,
      db = req.app.get("db");
    //Check if user
    let foundUser = await db.users.check_user(email);
    if (!foundUser[0]) {
      return res.status(400).send({
        message: "Email does not exist",
      });
    }
    // check authentication
    const authenticated = bcrypt.compareSync(password, foundUser[0].password);

    if (!authenticated) {
      return res.status(401).send({
        message: "Password is incorrect",
      });
    }

    //place user on a session, send session cliet-side
    delete foundUser[0].password;
    req.session.user = foundUser[0];
    res.status(202).send(req.session.user);
  },
  logout: (req, res) => {
    //logout will clear out the session object of user data.
    req.session.destroy();
    res.sendStatus(200);
  },
  isAuthenticated: (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/login");
    } else {
      next();
    }
  },
};
