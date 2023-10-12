//id
//community --> foreignkey -> community table
//member --> foreignKey -> user Table
//role --> foreignKey -> role Table
//createdAt

//id, username, emailId, firstName, lastName, phoneNumber, password
const { literal } = require("sequelize");

exports.defineMember = (conn, DataTypes) => {
	const Member = conn.define("member", {
		id: {
			type: DataTypes.UUID,
			defaultValue: literal("gen_random_uuid()"),
			primaryKey: true,
		},
		communityId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		member: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		Role: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			default: () => {
				return new Date.now();
			},
		},
	});

	return Member;
};
