const http = require("http");
let port  = 3000;  // 3000- 9000


const server = http.createServer(function(req, res) {

  let  { method,  url } =  req;
  console.log("hello again")
  console.log(`method = ${method}, url = ${url} `)
  res.write('Welcome to my server');
  res.end();
});


server.listen(port, function() {
 console.log(`server is running on ${port}`);
});
