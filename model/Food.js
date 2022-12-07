const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
	foodName: {
		type: String,
		required: true,
		unique: true,
	},
	nutrition: {
		calories: { type: string },
		fat: { type: string },
	},
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
