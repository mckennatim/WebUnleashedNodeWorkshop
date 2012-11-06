var express = require('express');
var app = express();
var request = require('request');
var url = require('url');
var hbs = require('hbs');


// configure expresss. This is an important step.
// set our view engine to hbs. Handlebars.js
// now express will automaticly look for all .hbs files in the directory views
app.set('views', __dirname + '/public/views');

app.set('view engine', 'hbs');

app.get('/', function(request, response) {
	// instead of send() or sendFile() 
	// we now do render and layout name
	response.render("message",{message:"Hello"});
});

app.listen(8080);
