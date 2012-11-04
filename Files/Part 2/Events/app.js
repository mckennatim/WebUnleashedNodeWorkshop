var http = require('http');

var server = http.createServer();

server.on('request',function(request,response){
	response.writeHead(200); // HTTP status
	response.write("Hello Web Unleashed");
	response.end();
});

server.on('connection',function(socket){
   console.log("New Connection");	
});
server.listen(3030);