const express = require("express");

const WeekController = require("../src/week/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/", Auth(), WeekController.getAll);
router.post("/", Auth("manageWeek"), WeekController.create);

module.exports = router;
