// request mongoose
const mongoose = require('mongoose');

// create a schema
const PersonSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			minLength: [3, 'Name must be at least 3 characters'],
		},
	},
	{ timestamps: true }
);

// export the schema
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
