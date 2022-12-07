const Food = require('../model/Food');

exports.getAllPosts = async (req, res) => {
	const foods = await Food.find();
	res.status(200).json(foods);
};
