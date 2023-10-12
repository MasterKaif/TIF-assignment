const { defineCommunity } = require("../models/community.model");
const { defineUser } = require("./../models/user.model");
const { defineRole } = require("./../models/role.model");
const { defineMember } = require("./../models/member.model");
const dbConnection = require("./dbConnection");

const Member = defineMember(dbConnection.connection, dbConnection.Datatypes);
exports.createMemberTable = async (forceCreation) => {
	const User = defineUser(dbConnection.connection, dbConnection.Datatypes);
	const Community = defineCommunity(
		dbConnection.connection,
		dbConnection.Datatypes
	);
	const Role = defineRole(dbConnection.connection, dbConnection.Datatypes);

	Member.belongsTo(User, {
		foreignKey: "member",
		targetKey: "id",
	});
	Member.belongsTo(Community, {
		foreignKey: "communityId",
		targetKey: "id",
	});
	Member.belongsTo(Role, {
		foreignKey: "role",
		targetKey: "id",
	});

	await Member.sync({ force: forceCreation });
};
