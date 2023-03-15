const express = require("express");

const ToodlerController = require("../src/toddler/controller");
const Auth = require("../middlewares/authentication");
const { uploadSingle } = require("../middlewares/multer");

const router = express.Router();

router.post("/", uploadSingle, Auth("manageToddler"), ToodlerController.create);
router.get("/", Auth("manageToddler"), ToodlerController.getAll);
router.delete("/:toddler_id", Auth("manageToddler"), ToodlerController.deleteToddler);

module.exports = router;
