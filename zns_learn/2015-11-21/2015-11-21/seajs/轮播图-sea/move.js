'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//json{sName:iTarget,sName:iTarget}
//type	linear	ease-in		ease-out
function startMove(obj,json,type,time){
	var start = {};
	var dis = {};
	
	//var start = parseFloat(getStyle(obj,sName));
	//var dis = iTarget-start;
	
	for(var name in json){
		//name 			sName
		//json[name]	iTarget
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name]-start[name];
	}
	
	var count = Math.floor(time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
}











