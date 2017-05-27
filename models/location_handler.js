// dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
// loc = suppury GEOjson
var statusSchema = new mongoose.Schema({
	user_name: String,
	user_phone: String,
	// time is: mm/dd/yy hh:mm OR yyyy-mm-ddThh:mm:ss.mmm 
	//Note: save in GMT (Z = zulu) 
	time : { 
		type : Date, 
		default: Date.now
	},
	
	loc: {
        type: { type: String , default:"Point"},
        coordinates: {type: [Number], default:[0,0]},
        
    }, 
    is_running: {type: Boolean, default: false}
 });

// search location
statusSchema.index({ "loc": "2dsphere" });

//Create a model based on the schema
distance = mongoose.model('tblstatus', statusSchema);

radiusAroundMe = function(req, res, next) {
	queryOfDistance = {
		"loc":{  
	      "$near":{  
	         "$geometry":{  
	            "type":"Point",
	            "coordinates": req.body.coordinates
	         },
	         "$maxDistance":2000 // in meters
	      }
	   }
	};

	// return the json of statusSchema
	// function (err, docs) {res.json(docs) --> run over all the data base
	distance.find(queryOfDistance,function (err, docs) {
	        res.json(docs);
	    });
};

//return the lastes coordinat - find by specific ID
latestCoordinateOfPerson = function(req,res){
	distance.find({user_id: req.body.user_id }).
		sort({time: -1}).limit(1).exec(function(err,docs){		
			res.json(docs);
		})	
};


//return model
// tblstatus = table name
// whoever goes to url: search_users_around_me, goint to "radiusAroundMe"
module.exports = restful.model('tblstatus',statusSchema).
	route('search_users_around_me', radiusAroundMe);


//return model
module.exports = restful.model('tblstatus',statusSchema).
	route('return_latest_coor', latestCoordinateOfPerson);

