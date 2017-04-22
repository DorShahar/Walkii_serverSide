//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var util = require('util');
// connect to mongoDB
mongoose.connect(util.format('mongodb://%s:%s@ds161400.mlab.com:61400/walkii_db_14042017', process.env.MLAB_USERNAME, process.env.MLAB_PASSWORD));

// express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
// everything is under the api path: /api -->
// is under control of ('./routes/api')
app.use('/api',require('./routes/api'));

//start server
// rocess.env.PORT => this is the port that heroku want me to listen to
app.listen(process.env.PORT || 8080);  
console.log('server is runnig on port: ' + process.env.PORT); 