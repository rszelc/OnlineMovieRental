const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
	img: {type: String, required: true},
	title: {type: String, required: true},
	date: {type: Number, required: true}, 
	rate: {type: Number, required: true},
	ratesum: {type: Number, required: true},
	ratelicz: {type: Number, required: true},
	genre: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true}
});


module.exports = mongoose.model('film', filmSchema);