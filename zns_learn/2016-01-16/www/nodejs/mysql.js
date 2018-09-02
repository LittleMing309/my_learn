var mysql = require('mysql');

var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'2016-01-16'
});
db.query('SELECT * FROM user_tab',function(err,data){
	if(err){
		console.log('失败');
	}else{
		for(var i=0;i<data.length;i++){
			console.log(data[i].username);
		}
	}
});
















