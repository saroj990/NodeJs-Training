function main() {
  console.log("before reading a file");
 read(); // pass callback 

 console.log("after reading the file");
}
function read() {
  fs.readFile("file.txt", "utf8", function(err, content) {
    if(err) {
      console.log("err occurred!!");
    } else {
      console.log("content \n", content);
    }
  });
}


main();