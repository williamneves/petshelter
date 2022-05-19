const PetController = require('../controllers/pet.controller');
module.exports = function ( app ) {
  // Welcome message
  app.get( '/api', PetController.index );
  // Create a new pet
  app.post( '/api/pet', PetController.createPet );
  // Get all pets
  app.get( '/api/pets', PetController.getAllPets );
  // Get a single pet
  app.get( '/api/pet/:id', PetController.getPet );
  // Delete a pet
  app.delete( '/api/pet/:id', PetController.deletePet );
  // Update a pet
  app.put( '/api/pet/:id', PetController.updatePet );
  // Like a pet
  app.put( '/api/pet/:id/like', PetController.likePet );
};
