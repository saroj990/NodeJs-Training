const users = require('./../data/users.json');

class UserModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAll() {
    return users;
  }
}

UserModel.prototype.get = function (key, value) {
  return users.find((user) => user[key] == value);
};

UserModel.prototype.save = function () {
  if (!this.name) {
    throw new Error('Name missing');
  }

  this.id =
    users.reduce((acc, curr) => {
      return acc > curr.id ? acc : curr.id;
    }, 0) + 1;

  users.push({
    id: this.id,
    name: this.name,
    email: this.email,
  });
  return this;
};

module.exports = UserModel;
