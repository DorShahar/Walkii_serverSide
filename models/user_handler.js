var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
	user_id: String,
	time : { 
		type : Date, 
		default: Date.now
	},
	loc: {
        type: { type: String },
        coordinates: [Number]
    },
 });


distance = mongoose.model('userslocations', statusSchema);
radiusAroundMe = function(req, res, next) {
	query = { user_id:"1"};

	// return the json of statusSchema
	// function (err, docs) {res.json(docs) --> run over all the data base
	distance.find(query,function (err, docs) {
	        res.json(docs);
	    });
};


module.exports = restful.model('usersLocations',statusSchema).
	route('eeeeee', radiusAroundMe);