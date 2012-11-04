var fs = require('fs');
var http = require('http');



var server = http.createServer();

server.on('request',function(request,response){
 	var file = fs.createWriteStream("file.txt");
	request.pipe(file);
	
	request.on('end',function(){
	  response.write('uploaded!');
	  response.end();
	});
});


server.listen(3030);