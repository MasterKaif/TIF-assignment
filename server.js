const express = require("express");
const app = express();
const serverConfig = require("./configs/server.config");
const dbConnection = require("./DAO/repository/dbConnection");
const bodyparser = require("body-parser");
const { createRoutes } = require("./router/parent.router")
const { initializeTables } = require("./DAO/repository/initializeTable.js");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
	res.send({
		message: "This is TIF assignment",
		author: "Kaif Master",
		submittedOn: "12-10-2023",
	});
});

app.listen(serverConfig.PORT, serverConfig.HOST, () => {
	console.log(
		`server is listening on ${serverConfig.HOST}: ${serverConfig.PORT}`
	);
});

// IIFE - Immediately invoked function expression!
(() => {
	//1.
	createRoutes(app);
	if (serverConfig.ENV === "dev") {
		initializeTables(true);
	}
})();
