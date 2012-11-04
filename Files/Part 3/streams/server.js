var fs = require('fs');
var http = require('http');



var server = http.createServer();

server.on('request',function(request,response){
 	fs.createReadStream("/etc/hosts")
		.on('data',function(data){
			response.write(data+"\n");
	
	}).on('end',function(){
		 response.end();
	});
});


server.listen(3030);