function main() {
  readFile('myFile.txt', function(content) {
    // got data after reading the file
    console.log("content :", content);
  });
  console.log("Meanwhile I will get executed");
  for(let i =0;i< 10; i++) {
    console.log("i :", i);
  }
  getDataFromSomeExternalAPI("http://www.google.com");
}

function readFile(cb) {
  let fileContent = "";
  // logic to read the content of the file

  return cb(fileContent);
}

function getDataFromSomeExternalAPI(content) {
  // logic to write to db
}



