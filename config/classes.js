const Mongoose = require("mongoose");
const Joigoose = require("joigoose")(Mongoose);
const glob = require("glob");
const path = require("path");
const classes = {};

glob(path.resolve("classes", "**/*.js"), (error, files) => {
	if (error) return false;

	files.map(file => {
		const joiSchema = require(file);
    const schema = new Mongoose.Schema(Joigoose.convert(joiSchema));
		const fileName = file
			.substr(file.search(/[^.\/]*\.js/))
			.replace(".js", "")
			.replace(/^\w/, chr => chr.toUpperCase());

		classes[fileName] = Mongoose.model(fileName, schema);
	});
});

module.exports = classes;
