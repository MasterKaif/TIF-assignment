const express = require('express');
const { registerUser, login } = require('../controller/user.controller');

const router = express.Router();
router.post("/signUp", registerUser);
router.post("/signIn", login);
router.get("/me", )
module.exports = router;