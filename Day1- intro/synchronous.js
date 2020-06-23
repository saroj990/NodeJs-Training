function main() {
  let content = readFile('myFile.txt');
  console.log("content :", content);
  let data = getDataFromSomeExternalAPI('http://www.google.com');
  console.log("data :", data);
}

function readFile(file) {
  let fileContent = "";
  // logic to read the content of the file

  return fileContent;
}

function getDataFromSomeExternalAPI(url) {
  // get data from API
}
