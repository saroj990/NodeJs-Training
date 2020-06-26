const UserModel = require('./../models/user.model');

module.exports = {
  getAllUsers: function (req, res) {
    const allUsers = UserModel.getAll();
    res.send(allUsers);
  },

  getUserById: function (req, res) {
    var newUser = new UserModel();
    return res.json(newUser.get('id', req.params.id));
  },

  deleteUser: function (req, res) {
    var id = req.params.id;
    var newUser = new UserModel();
    const existingUser = newUser.delete(id);
  },

  addUser: function (req, res) {
    var email = req.body.email;
    var name = req.body.name;
    try {
      if (!email) {
        throw new Error('email missing');
      }

      if (!name) {
        throw new Error('name missing');
      }
      var newUser = new UserModel();

      const existingUser = newUser.get('email', email);

      if (existingUser != null) {
        throw new Error('email already exists');
      }

      newUser.name = name;
      newUser.email = email;

      const addedUser = newUser.save();
      return res.json(addedUser);
    } catch (e) {
      return res.status(400).json({
        error: e.message,
      });
    }
  },
};
