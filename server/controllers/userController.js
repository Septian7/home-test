const { User } = require("../models");
const { decrypt} = require("../helpers/encdec");
const { tokenGenerator} = require("../helpers/jwt");

class userController {
  static async show(req, res) {
    try {
      let users = await User.findAll({
        order: [["id", "ASC"]],
      });

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username)
      console.log(password)
      let users = await User.findOne({
        where: { username },
      });
     
      if (users) {
        if (decrypt(password, users.password)) {
          let access_token = tokenGenerator(users);
          res.status(200).json({
            access_token,
          });
        } else {
          res.status(403).json({
            message: "password is Invalid!",
          });
        }
      } else {
        res.status(404).json({
          message: "user not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = userController;
