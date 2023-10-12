const { defineUser } = require("../models/user.model");
const dbConnection = require("./dbConnection");

const User = defineUser(dbConnection.connection, dbConnection.Datatypes);
exports.createUserTable = async (forceCreation) => {
	await User.sync({ force: forceCreation });
};

exports.registerUser = async (user) => {
	const dbUser = await User.create({
		name: user.name,
		email: user.email,
		password: user.password,
	});

	return {
		name: dbUser.name,
		email: dbUser.email,
	};
};

exports.fetchUserByCriteria = async (criteria) => {
	return await User.findOne(criteria);
};
