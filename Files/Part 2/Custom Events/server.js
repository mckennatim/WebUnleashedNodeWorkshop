var ee = require('events').EventEmitter;

var unleashed = new ee();


unleashed.on("start",function(){
	console.log("open the doors");
});

unleashed.on("end",function(wasItGood){
	if(wasItGood){
		console.log("YAY");
	}else{
		console.log("Bummer");
	}
});


unleashed.emit('start');

unleashed.emit('end',false);
