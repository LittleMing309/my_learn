'use strict'
function json2url(json){
	var arr = [];
	for(var i in json){
		arr.push(i+'='+encodeURIComponent(json[i]));
	}
	return arr.join('&');
}
function ajax(json){
	json = json||{};
	if(!json.url)return;
	json.type = json.type||'get';
	json.data = json.data||{};
	
	json.data.t = Math.random();
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	switch(json.type.toLowerCase()){
		case 'get':
			oAjax.open('GET',json.url+'?'+json2url(json.data),true);
			oAjax.send();
			break;
		case 'post':
			oAjax.open('POST',json.url,true);
			oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			oAjax.send(json2url(json.data));
			break;
		default:
			oAjax.open('GET',json.url+'?'+json2url(json.data),true);
			oAjax.send();
			break;
	}
	//4.接收
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				json.success&&json.success(oAjax.responseText);
			}else{
				json.error&&json.error();
			}
		}
	};
}







