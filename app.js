//Load Userland npm Modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
var path = require('path');
var util = require('./util/lib.js');


//Load Custom Modules (Models/Routes)
var Book = require('./models/books');           // Book Model
var Author = require('./models/authors');       // Author Model
var bookRoutes = require('./routes/books');     // V1 API Book Routes
var bookRoutes2 = require('./routes/books2');   // V2 API Book Routes
var authorRoutes = require('./routes/authors'); // V1 API Author Routes


//Initialize Server
var app = express();
var port = process.env.PORT || 3000;
mongoose.connect('localhost/bookSchema');

//Configure Server Environment
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


//Configure Routes
app.all('/api/*', util.requireAuthentication);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
//app.use('/api/v1/books', bookRoutes);  // '/v1/api' 
//app.use('/api/v2/books', bookRoutes2); // '/v2/api' 


//Start Server listening on port 3000
app.listen(port, function(){
	console.log('Server listening on port ' + port);
});




