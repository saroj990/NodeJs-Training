module.exports = {
  addUser: function(user) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      // added a user record
      resolve("okay done");
    }, 2000)
   });
  }
}