const http = require("http");
let port  = 3000;  // 3000- 9000


const server = http.createServer(function(req, res) {
  let data = [];
  let { method } = req; // { method: 'GET', url : '/, headers: {}}
  
  
  if(method === "POST") {
    req.on('error', function(err) {
      console.log("error caught!!");
    }).on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      data = Buffer.concat(data).toString();
      res.write(data);
      res.end();
    });
  } else {
    res.write("I am a get request");
    res.end();
  }

});


server.listen(port, function() {
 console.log(`server is running on ${port}`);
});
