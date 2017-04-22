//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// connect to mongoDB
mongoose.connect('mongodb://dorshahar:doridc1988@ds161400.mlab.com:61400/walkii_db_14042017');

// express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
// everything is under the api path: /api -->
// is under control of ('./routes/api')
app.use('/api',require('./routes/api'));

//start server
app.listen(process.env.PORT || 8080);  // port 3000
console.log('server is runnig on port 3000')