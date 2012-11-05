var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request',function(request,response){
 	var file = fs.createWriteStream("file.txt");
	
	request.on('data',function(data){
	  var good = file.write(data);
		if(!good){
			request.pause();
		}
		console.log("Writing \n");
	});
	
	file.on('drain',function(){
		request.resume();
	})
	
	request.on('end',function(){
		file.end();
		console.log("end");
		response.end();
	});
	

	
});


server.listen(3030);


//curl --upload-file /Users/FaisalAbid/Dropbox/General/Presentations/WebUnleashedNodeWorkshop/Files/Part\ 3/upload-progress/filesss.txt  http://localhost:3030