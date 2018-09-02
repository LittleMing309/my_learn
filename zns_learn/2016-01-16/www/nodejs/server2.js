var http = require('http');

var server = http.createServer(function(request,response){
	//request 		请求
	//response 		响应
	response.write('abcdefg');
	response.end();
});
server.listen(8081);
