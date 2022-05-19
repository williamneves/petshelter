// request mongoose
const mongoose = require( 'mongoose' );
var uniqueValidator = require('mongoose-unique-validator');

// create a schema
const PetSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			minLength: [ 3, 'Name must be at least 3 characters' ],
			unique: true,
			uniqueCaseInsensitive: true
		},
		type: {
			type: String,
			minlength: [ 3, 'Type must be at least 3 characters' ],
		},
		description: {
			type: String,
			minlength: [ 3, 'Description must be at least 3 characters' ],
		},
		skill1: {
			type: String,
			// minlength: [ 3, 'Skill must be at least 3 characters' ],
		},
		skill2: {
			type: String,
			minlength: [ 3, 'Skill must be at least 3 characters' ],
		},
		skill3: {
			type: String,
			minlength: [ 3, 'Skill must be at least 3 characters' ],
		},
		likes: {
			type: Number,
			default: 0
		},
		adopted: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);
// add unique validator
PetSchema.plugin(uniqueValidator, { message: 'Name must be unique' });

// export the schema
const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
