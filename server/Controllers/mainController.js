const bcrypt = require("bcryptjs");
module.exports = {
  update: (req, res) => {
    const { id } = req.params,
      { email, firstName, lastName } = req.body,
      db = req.app.get("db");

    db.users
      .update_user(email, firstName, lastName, id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => console.log(error));
  },
  delete: (req, res) => {
    const { id } = req.params,
      db = req.app.get("db");

    // console.log(id);

    db.users
      .delete_user(id)
      .then(() => {
        req.session.destroy();
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(error);
      });
  },

  updatePassword: (req, res) => {
    const { id } = req.params,
      { password } = req.body,
      db = req.app.get("db");

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    db.users
      .update_password(hash, id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
