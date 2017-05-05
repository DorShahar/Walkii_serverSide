var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var runner = new mongoose.Schema({
	time: Number,
	user_name: String,
	user_phone: String
 });

//return model
// tblstatus = table name

module.exports = restful.model('tblstatus',runner).
	route();