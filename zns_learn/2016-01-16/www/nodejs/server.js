var http = require('http');

var server = http.createServer(function(request,response){
	console.log('有人来了');
});
server.listen(8081);
