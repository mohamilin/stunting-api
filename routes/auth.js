const express = require("express");
const AuthControllers = require("../src/auth/controller");
const validate = require("../validation/validate");
const Validation = require("../validation");
const Auth = require("../middlewares/authentication");
const router = express.Router();


router.post(
  "/register",
  validate(Validation.AuthValidation.register),
  AuthControllers.register
);

router.post(
  "/register-nakes",
  validate(Validation.AuthValidation.register),
  AuthControllers.registerNakes
);

router.post("/login", AuthControllers.login);
router.get("/refresh-token", AuthControllers.refreshToken);
router.post("/logout", AuthControllers.logout);

module.exports = router;
