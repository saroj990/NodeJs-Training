const http = require("http");
const host = "127.0.0.1"
const port = 3001;

const server = http.createServer((req, res) => {
  let { method, url, headers} = req;
  const body = [];
  if (req.method === 'POST' && req.url === '/echo') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.end(body);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
  // req.on('error', function(err) {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end();
  // }).on('data', function(chunk) {
  //   body.push(chunk);
    
  // }).on("end", function() {
  //   body = Buffer.concat(body).toString();
  //   response.end(body);
  // });
  // console.log(`you just sent a ${method} req with url ${url}`);
  // if(url) {
  //   res.write(`You just requested ${url}, headers : ${JSON.stringify(headers)}`)

  // } else {
  //   res.write("NodeJs server is live!!")
  // }
  // res.end();
  // console.log("NodeJs server is ready to handle request");
}).listen(port, host, function() {
  console.log(`server is listening on ${host}:${port}`);
});
