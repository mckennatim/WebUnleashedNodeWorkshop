var http = require('http');


var server = http.createServer(function(request,response){
	response.writeHead(200); // HTTP status
	response.write("Hello Web Unleashed");
	response.end();
});

server.listen(3030);