let io = require("./io");
function main() {
 console.log("inside main");
 console.log("reading file");
 io.readFile(function(err, content) {
  if(err) {
    console.log("err occurred!!");
  } else {
    console.log("Here is today's agenda \n", content);
    
  }
 });
 console.log("done");
}

main();