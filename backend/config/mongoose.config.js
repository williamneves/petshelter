// requise module mongoose
const mongoose = require('mongoose');

// set a database name
const dbName = 'mern-app';

// connect to mongoose
mongoose
	.connect(`mongodb://localhost/${dbName}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Established a connection to the database'))
	.catch((err) => console.log('Something went wrong when connecting to the database', err));
