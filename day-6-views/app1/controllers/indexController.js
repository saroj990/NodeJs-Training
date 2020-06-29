module.exports = {
  index: function(req, res) {
    UserService.archiveUsers();
  }
}