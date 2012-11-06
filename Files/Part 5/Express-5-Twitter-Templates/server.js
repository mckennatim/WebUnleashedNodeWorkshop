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
	response.render("index");
});

app.get('/twitter/:username', function(req, res) {
	var username = req.params.username;
	options = {
		protocol: "http:",
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: {
			screen_name: username,
			count: 100
		}
	}
	
	var twitterUrl = url.format(options);
	request(twitterUrl,function(error,response,body) {
		console.log(body);
		res.render("message",{"tweets":JSON.parse(body)});
	});
});

app.listen(8080);


