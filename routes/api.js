// dependencies:
var express = require('express');
var router = express.Router();


//get models:
var locationStatus = require('../models/location_handler');

// routes:
// the methods of locationStatus:
locationStatus.methods(['get', 'post', 'put', 'delete']);

// update url locationStatus
locationStatus.register(router,'/locationStatus');

//return router:
module.exports = router;