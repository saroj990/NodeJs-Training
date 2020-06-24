const http = require('http');
const Router = require('router');
const finalHandler = require('finalhandler')

let router = Router();
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!')
});

router.get("/user/:user", function(req, res) {
  let { 
    params
  } = req;
 res.write(`Hello ${JSON.stringify(params.user)}`);
 res.end()
});
const server = http.createServer(function(req, res) {
  router(req, res, finalHandler(req, res));
});

server.listen(3001, function() {
  console.log("server is listening on 127.0.0.1:3001");
})