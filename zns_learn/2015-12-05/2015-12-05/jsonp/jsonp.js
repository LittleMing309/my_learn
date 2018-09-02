'use strict'
function jsonp(json){
	json = json||{};
	if(!json.url)return;
	json.cbName = json.cbName||'cb';
	json.data = json.data||{};
	
	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	var arr = [];
	var str = '';
	for(var name in json.data){
		arr.push(name+'='+encodeURIComponent(json.data[name]));
	}
	str = arr.join('&');
	
	var oS = document.createElement('script');
	var oH = document.getElementsByTagName('head')[0];
	window[json.data[json.cbName]] = function(res){
		json.success(res);
		
		oH.removeChild(oS);
		
	};
	oS.src=json.url+'?'+str;
	oH.appendChild(oS);
}