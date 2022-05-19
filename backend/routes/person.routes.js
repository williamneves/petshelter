const PersonController = require('../controllers/person.controller');
module.exports = function ( app ) {
  // Welcome message
  app.get( '/api', PersonController.index );
  // Create a new person
  app.post( '/api/person', PersonController.createPerson );
};
