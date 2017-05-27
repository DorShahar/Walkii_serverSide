// dependencies:
var express = require('express');
var router = express.Router();


//get models:

//post loction of the uers to DB
var locationStatus = require('../models/location_handler');
//Register user data when login
var userHandler = require('../models/user_handler');
// All the users that want to run now or in X minutes - update the DB
var isRunning = require('../models/isRunning');
// when user accept the runn - the users are in the same run
var joinRun = require('../models/joinRun');


// routes:
// the methods of locationStatus:
locationStatus.methods(['get', 'post', 'put', 'delete']);
userHandler.methods(['get', 'post', 'put', 'delete']);
isRunning.methods(['get', 'post', 'put', 'delete']);
//joinRun.methods(['get', 'post', 'put', 'delete']);

// update url :
locationStatus.register(router,'/locationStatus');
userHandler.register(router,'/usersAtApp');
isRunning.register(router,'/isRunning');
//joinRun.register(router,'/joinRun');


//return router:
module.exports = router;