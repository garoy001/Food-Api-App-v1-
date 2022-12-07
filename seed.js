const Food = require('./model/Food');
const foodData = require('./data/food.json');

require('./config')();

const seedData = async () => {
	try {
		await Food.insertMany(foodData);
		console.log('data seeded');
	} catch (err) {
		console.log(err.message);
	}
};
seedData();
