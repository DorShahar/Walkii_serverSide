// dependencies:
var express = require('express');
var router = express.Router();


//get models:
var locationStatus = require('../models/location_handler');

//
var isRunning = require('../models/isRunning');

//
var pullOf_getRunners = require('../models/getRunners');

//
var joinRun = require('../models/joinRun');


// routes:
// the methods of locationStatus:
locationStatus.methods(['get', 'post', 'put', 'delete']);

// All the users that want to run now or in X minutes - update the DB
isRunning.methods(['get', 'post', 'put', 'delete']);

// return (at First) ALL the runners: phone, name . coordinates . Future: user photo
pullOf_getRunners.methods(['get', 'post', 'put', 'delete']);

// when user accept the runn - the users are in the same run
joinRun.methods(['get', 'post', 'put', 'delete']);

// update url :
//locationStatus
locationStatus.register(router,'/locationStatus');

isRunning.register(router,'/isRunning');

pullOf_getRunners.register(router,'/getRunners');

joinRun.register(router,'/joinRun');


//return router:
module.exports = router;