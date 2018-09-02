var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('root'+req.url,function(err,data){
		if(err){
			res.write('404 NOT FOUND');
		}else{
			res.write(data);
		}
		res.end();
	});
}).listen(8081);