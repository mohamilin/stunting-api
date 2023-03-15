const express = require("express");

const NakesController = require("../src/nakes/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/", Auth("manageUsers"), NakesController.getAll);
router.put(
  "/validate-toddler/:toddlerNik",
  Auth("validateToddler"),
  NakesController.validateToddler
);
router.get("/toddler-sign", Auth("manageUsers"), NakesController.toddlerSign);
router.get("/progress/:toddlerId", Auth("manageUsers"), NakesController.toddlerProgress);

module.exports = router;
