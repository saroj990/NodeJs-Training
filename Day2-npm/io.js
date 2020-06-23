let fs = require("fs")
function read(cb) {
  fs.readFile("agenda.txt", "utf8", function(err, content) {
    if(err) {
      cb("err occurred!!", null);
    } else {
    cb(null, content);
    }
  });
}



module.exports = {
  readFile: read
}
// move it to separate module, import and execute