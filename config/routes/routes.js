exports.public = [
	{
		method: "GET",
		path: "/",
		handler: (req, res) => "Hello"
	}
];

exports.authentication = require('./public/authentication');
