var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var membreSchema = new Schema({
	'nom' : String,
	'cognoms' : String,
	'email' : String,
	'telefon' : String
});

module.exports = mongoose.model('membre', membreSchema);
