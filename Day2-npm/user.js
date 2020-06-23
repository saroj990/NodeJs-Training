function getUsers() {
  findUsers(function(err, users) {
    console.log("users: ", users);
    const firstUser = users[0];
    deleteUser(firstUser, function(err, status) {
      if(err) { 
        // deal with error
        console.log(err);
      }
       else {
         console.log("status", status)
       }
    });
  });
}

function findUsers(cb) {
  return cb(null, [1, 2, 3]);
}

getUsers();

function deleteUser(id, cb) {
  cb(null, true);
}