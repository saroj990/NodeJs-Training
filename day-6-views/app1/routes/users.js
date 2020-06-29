var express = require('express');
var router = express.Router();

const User = require('../core/user');
const user = require('../core/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let users = user.find();
  res.render("users/index", { users: users });
});

/* GET users listing. */
router.get('/create', function(req, res, next) {
  // res.send('respond with a resource');
  res.render("users/create");
});

router.post('/save', function(req, res, next) {
  const params = req.body;
  user.save(params); // callback
  res.redirect('/');
});

router.get('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
