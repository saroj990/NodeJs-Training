var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', nameValidator, isAuthenticated, function(req, res, next) {
  
  res.send('respond with a resource');
});

function isAuthenticated(req, res, next) {
  const authenticated = req.auth === true;
  if(authenticated) {
    next();
  } else {
    next(new Error('UnAuthenticated request'))
  }
}

function nameValidator(req, res, next) {
  let { fname, lname } = req.body;
  if(!fname || !lname)  {
    res.status(500);
    res.json({
      error: true,
      message: 'Input parameters are missing'
    });
    // return;
  } else {
    req.auth = true;
    next();
  }
}

module.exports = router;
