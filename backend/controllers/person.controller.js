// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Person model
const Person = require('../models/person.model');

// Export createPerson method
module.exports.createPerson = (request, response) => {
	const { name } = request.body;
	Person.create({
		name,
	})
		.then((person) => response.json(person))
		.catch((err) => response.status(400).json(err));
};
