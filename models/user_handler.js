var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	user_id: String,
	user_name: String,
	user_phone: String
 });

// search index
userSchema.index({user_id: 1});

// Create a model based on the schema
users = mongoose.model('usersAtApp', userSchema);

//return Data
returnUsers = function(req, res, next) {
	query_returnUsers = { 
		user_id: req.body.user_id ,
		user_name: req.bodyuser_name ,
		user_phone: req.bodyuser_phone 
	};

	// return the json of statusSchema
	// function (err, docs) {res.json(docs) --> run over all the data base
	users.find(query_returnUsers,function (err, docs) {
	    if (err) throw err;
    	res.json(docs);	
	    });
};

//return model
// usersAtApp = table name
// whoever goes to url: users_at_app, goint to "returnUsers" funtion
module.exports = restful.model('usersatApp',userSchema).
	route('users_at_app', returnUsers);