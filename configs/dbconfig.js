const dotenv = require("dotenv").config();

module.exports = {
	HOST: process.env.dbHOST,
	PORT: process.env.dbPORT,
	USER: process.env.dbUSER,
	PASSWORD: process.env.PASSWORD,
	DB: process.env.dbNAME,
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
