// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Pet model
const Pet = require('../models/pet.model');

// Export createPet method
module.exports.createPet = (request, response) => {
	const { name, type, description, skill1, skill2, skill3 } = request.body;
	Pet.create({
		name,
		type,
		description,
		skill1,
		skill2,
		skill3,
	})
		.then((person) => response.json(person))
		.catch((err) => response.status(400).json(err));
};

// Export getAllPets method
module.exports.getAllPets = ( request, response ) => {
	Pet.find()
		.then( pets => response.json( pets ) )
		.catch( err => response.status( 400 ).json( err ) );
}

// Export getPet method
module.exports.getPet = ( request, response ) => {
	Pet.findById( request.params.id )
		.then( pet => response.json( pet ) )
		.catch( err => response.status( 400 ).json( err ) );
}

// Export deletePet method
module.exports.deletePet = ( request, response ) => {
	Pet.findByIdAndDelete( request.params.id )
		.then( pet => response.json( pet ) )
		.catch( err => response.status( 400 ).json( err ) );
}

// Export updatePet method
module.exports.updatePet = ( request, response ) => {
	Pet.findByIdAndUpdate( request.params.id, request.body, { new: true } )
		.then( pet => response.json( pet ) )
		.catch( err => response.status( 400 ).json( err ) );
}

// Export likePet method
module.exports.likePet = ( request, response ) => {
	Pet.findByIdAndUpdate( request.params.id, { $inc: { likes: 1 } }, { new: true } )
		.then( pet => response.json( pet ) )
		.catch( err => response.status( 400 ).json( err ) );
}