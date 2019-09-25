const Hapi = require("@hapi/hapi");
const { Routes, Database } = require("./config/config");

(async () => {
	const server = Hapi.server({
		port: process.env.PORT,
		host: "localhost"
	});

	server.route(Routes.public);

	await server.start();

	console.log(`Server running on ${server.info.uri}`);
})();

process.on("unhandledRejection", err => {
	console.log(err);
	process.exit(1);
});
