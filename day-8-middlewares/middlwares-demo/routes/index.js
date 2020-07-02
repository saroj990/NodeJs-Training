var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', myMiddleware, function(req, res, next) {

  res.render('index', { title: 'Express' });

});

function myMiddleware (req, res, next) {
  console.log("I am the first middleware for index route");
    // res.json({
    //  message: "first middleare"  
    // });
    next();
}

module.exports = router;
