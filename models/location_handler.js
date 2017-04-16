// dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
// loc = suppury GEOjson
var statusSchema = new mongoose.Schema({
	 loc: {
        type: { type: String },
        coordinates: [Number],
    },
     user_name: String // facevook token???
});

// search location
statusSchema.index({ "loc": "2dsphere" });
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



//return model
// tblstatus = table name
module.exports = restful.model('tblstatus',statusSchema).
	route('search_users_around_me', radiusAroundMe);