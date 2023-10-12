const userRouter = require("./user.router");

exports.createRoutes = (app) => {
	app.use("v1/auth", userRouter);
};
