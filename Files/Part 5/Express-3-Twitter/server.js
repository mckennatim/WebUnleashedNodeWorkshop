var express = require('express');
var app = express();
var request = require('request');
var url = require('url');


app.get('/', function(request, response) {
	response.sendfile(__dirname + "/public/index.html");
});

app.get('/twitter/:username', function(req, response) {
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
	request(twitterUrl).pipe(response);
});

app.listen(8080);
