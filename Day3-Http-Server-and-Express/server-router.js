const finalhandler = require('finalhandler')
const http         = require('http')
const Router       = require('router')
 const bodyParser = require('body-parser')
const router = Router();

router.use(bodyParser())
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!')
})

router.get('/user/:user', function (req, res) {
  let { params } = req;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end(`Hey, ${params.user}`);
})

router.post('/user/:user', function (req, res) {
  let { body } = req;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end(`Hey, ${JSON.stringify(body)}`);
})


 
const server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(3000)