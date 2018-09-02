'use strict'
function json2url(json){
	var arr = [];
	for(var i in json){
		arr.push(i+'='+encodeURIComponent(json[i]));
	}
	return arr.join('&');
}
function ajax(url,data,type,fnSucc,fnFail){
	data.t = Math.random();
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	switch(type.toLowerCase()){
		case 'get':
			oAjax.open('GET',url+'?'+json2url(data),true);
			oAjax.send();
			break;
		case 'post':
			oAjax.open('POST',url,true);
			oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			oAjax.send(json2url(data));
			break;
		default:
			oAjax.open('GET',url+'?'+json2url(data),true);
			oAjax.send();
			break;
	}
	//4.接收
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail();
			}
		}
	};
}







