var fs = require('fs');
var http = require('http');



var server = http.createServer();

server.on('request',function(request,response){
 	var file = fs.createWriteStream("file.txt");
	
	request.on('data',function(data){
		file.write(data);
		console.log("Writing \n");
	});
	
	request.on('end',function(){
		file.end();
		console.log("end");
		response.end();
	});
	

	
});


server.listen(3030);