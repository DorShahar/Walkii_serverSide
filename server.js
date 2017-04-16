//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// connect to mongoDB
mongoose.connect('mongodb://dor shahar:doridc1988@ds161400.mlab.com:61400/walkii_db_14042017');

// express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api',require('./routes/api'));

//start server
app.listen(1000);  // port 1000
console.log('server is runnig on port 1000')