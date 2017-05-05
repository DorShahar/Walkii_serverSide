var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var gotRunners = new mongoose.Schema({
	time: Number,
	user_name: String,
	user_phone: String,
	user_photo: String
 });

//return model
// tblstatus = table name
module.exports = restful.model('tblstatus',gotRunners).
	route();