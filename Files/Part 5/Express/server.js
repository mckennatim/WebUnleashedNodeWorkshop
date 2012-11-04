var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('Hello World');
});

app.get('/conference/:name',function(request,response){
	response.send(request.params.name);
});
app.listen(8080);

