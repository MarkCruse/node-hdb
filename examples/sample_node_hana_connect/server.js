var http_port = process.env.PORT || 5000;
var http = require('http');
var server = http.createServer(function(req,res){
	require('./router').getRoutes(req,res);
});
server.listen(http_port,function(){
	console.log("Listening on port " + http_port);
});