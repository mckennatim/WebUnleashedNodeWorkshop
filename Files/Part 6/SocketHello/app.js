var express = require('express');
var app = express()
var http = require('http')
var server = http.createServer(app)
var io = require('socket.io').listen(server);


io.sockets.on('connection', function(client) {
	console.log("hello");
});


app.get('/',function(req,res){
  res.sendfile(__dirname+'/index.html');	
});

app.listen(3030);