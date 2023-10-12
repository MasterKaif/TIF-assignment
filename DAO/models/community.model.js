//id -- uuid
// name - varchar128
// slug - varchar 255 unique
// owner -- ref to user
// createdat
// updatedat

//id, username, emailId, firstName, lastName, phoneNumber, password
const { literal } = require("sequelize");

exports.defineCommunity = (conn, DataTypes) => {
	const Community = conn.define("community", {
		id: {
			type: DataTypes.UUID,
			defaultValue: literal("gen_random_uuid()"),
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		slug: {
			type: DataTypes.STRING(255),
			unique: true,
			allowNull: false,
		},
		owner: {
			type: DataTypes.UUID,
            unique: true,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			default: () => {
				return new Date.now();
			},
		},
		updatedAt: {
			type: DataTypes.DATE,
			default: () => {
				return new Date.now();
			},
		},
	});

	return Community;
};
