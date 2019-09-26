const Mongoose = require("mongoose");
const mongo = process.env.MONGO;
let Database;

if (mongo != "false") {
	console.log(mongo);
	Mongoose.connect(mongo);
	Database = Mongoose.connection;

	Database.on("error", console.error.bind(console, "connection error"));
	Database.once("open", () => console.log("Connection with database succeeded."));
}

module.exports = Database;
