const express = require("express");

const UserController = require('../src/user/controller');
const Auth = require("../middlewares/authentication");
 
const router = express.Router();

router.get('/', Auth('manageUsers'), UserController.getAll )
module.exports = router;
