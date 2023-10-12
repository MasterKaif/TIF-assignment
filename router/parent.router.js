const userRouter = require("./user.router");
const roleRouter = require("./role.router");

exports.createRoutes = (app) => {
	app.use("/v1/auth", userRouter);
	app.use("/v1/role", roleRouter);
};
