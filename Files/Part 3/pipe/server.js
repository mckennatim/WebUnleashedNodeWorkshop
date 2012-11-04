var fs = require('fs');
var http = require('http');



var server = http.createServer();

server.on('request',function(request,response){
 	var file = fs.createReadStream("/etc/hosts");
	file.pipe(response);
});


server.listen(3030);