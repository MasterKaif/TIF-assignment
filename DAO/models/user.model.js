//id, username, emailId, firstName, lastName, phoneNumber, password
const { literal } = require("sequelize");

exports.defineUser = (conn, DataTypes) => {
	const User = conn.define("user", {
		id: {
			type: DataTypes.UUID,
			defaultValue: literal("gen_random_uuid()"),
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			default: null,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			default: () => {
				return new Date.now();
			},
		},
	});

	return User;
};
