function move(obj,json,time){
	var start = {};  //start = {width:100,height:100}
	var dis = {};    // dis = { width:200,height:200}   距离

	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];
	}

	var count = Math.floor(time/30);     //运动总次数
	var n = 0;          // 当前运动次数

	clearInterval(obj.timer);

	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			var cur = start[name] + dis[name]*n/count;
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name] = cur + 'px';
			}
		}

		if(n == count){
			clearInterval(obj.timer);
		}
	},30);
};

function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}