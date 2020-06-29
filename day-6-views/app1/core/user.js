
const db = require('diskdb');
db.connect('/home/saroj/Projects/Training/NodeJs/day-6-views/app1', ['users']);


module.exports = {
  find: function() {
    return db.users.find();
  },
  save: function(params) {
    db.users.save(params);
  },
  edit: function() {

  },
  delete: function() {

  },
  archive: function() {

  }
};