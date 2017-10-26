var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clauSchema = new Schema({
	'nom' : String,
	'descripcio' : String,
	'propietari' : String
});

module.exports = mongoose.model('clau', clauSchema);
