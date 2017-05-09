//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var util = require('util');

// after get:
// deprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// connect to mongoDB
//mongoose.connect(util.format('mongodb://%s:%s@ds161400.mlab.com:61400/walkii_db_14042017', process.env.MLAB_USERNAME, process.env.MLAB_PASSWORD));
mongoose.connect("35.185.184.77:27017");

// express:xxx
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