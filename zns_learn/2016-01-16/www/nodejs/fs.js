var fs = require('fs'); 	//file system

fs.readFile('a.txt',function(err,data){
	if(err){
		console.log('没有找到');
	}else{
		console.log(''+data);
	}
});