const Mongoose = require("mongoose");

//load database
const { MONGO } = process.env;
let Database;

if (!MONGO) {
	Mongoose.connect(process.env.MONGO);
  Database = Mongoose.connection;
  
  Database.on('error', console.error.bind(console, 'connection error'));
  Database.once('open', () => console.log('Connection with database succeeded.'));
}

module.exports = Database;

