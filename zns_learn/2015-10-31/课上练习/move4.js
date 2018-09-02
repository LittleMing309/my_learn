function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}

function move(obj,json,time){
	var start = {};
	var dis = {};

	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}
	var count = Math.floor(time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			var cur = start[name] + dis[name]*n/count;
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')'
			}else{
				obj.style[name] = cur+'px';
			}
		}
		if(n == count){
			clearInterval(obj.timer);
		}
	},30);
}