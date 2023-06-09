const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.Controller");

router.post("/signin", authController.signin);
router.post("/signout", authController.signout);
router.post("/signup", authController.signup);

module.exports = router;
