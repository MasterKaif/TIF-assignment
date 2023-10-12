const { defineCommunity } = require("../models/community.model");
const { defineUser } = require("./../models/user.model");
const dbConnection = require("./dbConnection");

const Community = defineCommunity(
	dbConnection.connection,
	dbConnection.Datatypes
);
exports.createCommunityTable = async (forceCreation) => {
	const User = defineUser(dbConnection.connection, dbConnection.Datatypes);
	Community.belongsTo(User, {
		foreignKey: "owner",
		targetKey: "id",
	});

	await Community.sync({ force: forceCreation });
};
