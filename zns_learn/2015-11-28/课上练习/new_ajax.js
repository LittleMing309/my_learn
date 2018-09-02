'use strict'
function ajax(url,data,fnSucc,fnFail){
	//创建ajax
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//打开连接
	oAjax.open('GET',url+'?'+data,true);
	//发送请求
	oAjax.send();
	//接收
	oAjax.onreadystatechange = function(){
		if(oAjan.readyState==4){
			if(oAjax.status>=200&&oAjax.status<=300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail();
			}
		}
	};
}