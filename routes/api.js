// dependencies:
var express = require('express');
var router = express.Router();


//get models:
var locationStatus = require('../models/location_handler');

// maked by Dor on 24.7.17
var postLocation = require('../models/post_location');

// routes:
// the methods of locationStatus:
locationStatus.methods(['get', 'post', 'put', 'delete']);
postLocation.methods(['post','put','delete']);

// update url :
//locationStatus
locationStatus.register(router,'/locationStatus');
//post_location
postLocation.register(router,'/post_location');

//return router:
module.exports = router;