const express = require("express");
const { registerUser, login, getMyDetails } = require("../controller/user.controller");
const {
	validateToken,
} = require("../middleware/auth.middleware.js/authorization.middleware");

const router = express.Router();
router.post("/signUp", registerUser);
router.post("/signIn", login);
router.get("/me", validateToken, getMyDetails);
module.exports = router;
