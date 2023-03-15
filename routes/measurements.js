const express = require("express");

const MeasurementController = require("../src/measurement/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/", Auth(), MeasurementController.getAll);
router.post("/", Auth(), MeasurementController.create);


module.exports = router;
