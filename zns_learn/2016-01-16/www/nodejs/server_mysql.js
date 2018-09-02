var http  = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');

http.createServer(function(req,res){
	var arr = req.url.split('?');
	if(arr[0]=='/u'){
		var GET = qs.parse(arr[1]);
		var db = mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'',
			database:'2016-01-16'
		});
		db.query('SELECT * FROM user_tab WHERE username="'+GET['user']+'" AND password="'+GET['pass']+'"',function(err,data){
			if(err){
				res.end('{"err":1,"msg":"失败"}');
			}else{
				if(data.length){
					res.end('{"err":1,"msg":"成功"}');
				}else{
					res.end('{"err":1,"msg":"失败"}');
				}
			}
		});
	}else{
		fs.readFile('www'+arr[0],function(err,data){
			if(err){
				res.end('404');
			}else{
				res.end(data);
			}
		});
	}
}).listen(8081);











