// dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema - inside the array - all the data we need
var in_sameRun = new mongoose.Schema({
	user_name: String,
	user_phone: String,
	photo: String,
	time : { 
		type : Date, 
		default: Date.now
	},
	loc: {
        type: { type: String },
        coordinates: [Number]
    }, 
 });

// Schema - the array
var sameRun = new mongoose.Schema({
	run_ID: String ,
	runners_inRun: [in_sameRun],
});

//Create a model based on the schema
thisRun = mongoose.model('runatuniverse', sameRun);

//return
return_thisRun = function(req,res){
	thisRun.find({user_id: req.body.user_id }).
	exec(function(err,docs){
		res.json(docs);
	})
}

module.exports = restful.model('runatuniverse',sameRun).
	route('run_information', return_thisRun);



