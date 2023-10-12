const express = require("express");
const {
	createNewRole,
	getAllRolesWithPagination,
} = require("../controller/role.controller");

const router = express.Router();
router.post("/", createNewRole);
router.get("/", getAllRolesWithPagination);
module.exports = router;
