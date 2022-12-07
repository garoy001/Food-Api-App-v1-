const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const { DB_STRING } = process.env;

const connectDB = () => {
	return mongoose
		.connect(DB_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log(`database connected successfully`))
		.catch((err) => console.log(err.message));
};

module.exports = connectDB;
