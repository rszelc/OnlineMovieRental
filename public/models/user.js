const mongoose = require('mongoose');
var Film = require('../models/film');
var bcrypt = require('bcrypt-nodejs');
const userSchema = mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	fname: {type: String, required: true},
	lname: {type: String, required: true},
	phone: {type: String, required: true},
	films: [{type: mongoose.Schema.Types.Mixed, ref: 'Film'}],
	lfilms: {type: Number, required: true},
	wallet: {type: Number, required: true}
	
	
});

userSchema.methods.encryptPassword = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);