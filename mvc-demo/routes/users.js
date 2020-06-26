var express = require('express');
var router = express.Router();

var userController = require('./../controllers/user.controller');

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
