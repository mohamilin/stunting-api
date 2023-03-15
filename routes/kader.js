const express = require("express");

const KaderController = require("../src/kader/controller");
const Auth = require("../middlewares/authentication");

const router = express.Router();

router.get("/listing-stunting", Auth(), KaderController.listingStunting);
router.get("/listing-stunting-by-kader", Auth(), KaderController.listingStuntingByKader);
router.delete("/:user_id", Auth("manageUsers"), KaderController.deleteKader);

module.exports = router;
