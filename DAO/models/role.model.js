//id
//name varchar 65
//createdAt
//updatedAT
const { literal } = require("sequelize");

exports.defineRole = (conn, DataTypes) => {
	const Role = conn.define("role,", {
		id: {
			type: DataTypes.UUID,
			defaultValue: literal("gen_random_uuid()"),
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(64),
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

	return Role;
};
