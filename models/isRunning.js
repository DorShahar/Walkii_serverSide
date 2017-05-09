
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var runnerSchema = new mongoose.Schema({
	user_name: String,
	user_id: String,
	time : { 
		type : Date, 
		defauser_idult: Date.now
	},
	loc: {
        type: { type: String },
        coordinates: [Number]
    }, 
    is_running: Boolean
 });

// search index
runnerSchema.index({user_id: 1 , isrunning: 1});

//Create a model based on the schema
runner = mongoose.model('isRunning', runnerSchema);

//return Runners - true
returnRunner_now = function(req, res, next) {
	query_isRunning = {
		is_running: true
	 };

	// return the json of statusSchema
	// function (err, docs) {res.json(docs) --> run over all the data base
	runner.find(query_isRunning,function (err, docs) {
		if (err) throw err;
    	res.json(docs);	
	    });
};



module.exports = restful.model('isrunning',runnerSchema).
	route('return_isRunning', returnRunner_now);
