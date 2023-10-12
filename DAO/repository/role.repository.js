const { defineRole } = require("../models/role.model");
const dbConnection = require("./dbConnection");

const Role = defineRole(dbConnection.connection, dbConnection.Datatypes);
exports.createRoleTable = async (forceCreation) => {
	await Role.sync({ force: forceCreation });
};

exports.createNewRole = async (role) => {
	return await Role.create({
		name: role.name,
	});
};

exports.getAllRolesWithPagination = async (criteria) => {
	return await Role.findAll(criteria);
	
};

exports.rolesCount = async () => {
	return await Role.count();
}