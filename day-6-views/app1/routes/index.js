var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', IndexController.index);

module.exports = router;
