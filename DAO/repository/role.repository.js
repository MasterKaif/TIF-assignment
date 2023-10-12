const { defineRole } = require("../models/role.model");
const dbConnection = require("./dbConnection");

const Role = defineRole(dbConnection.connection, dbConnection.Datatypes);
exports.createRoleTable = async (forceCreation) => {
	await Role.sync({ force: forceCreation });
};
