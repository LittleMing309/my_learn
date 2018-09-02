var timer = null;
function move(obj,name,target,time){
	var start = parseFloat(getStyle(obj,name));
	var dis = target - start;
	var count = Math.floor(time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		if(name == 'opacity'){
			obj.style.opacity = start + dis*n/count;
			obj.style.filter = 'alpha(opacity:'+(start + dis*n/count)*100+')' 
		}else{
			obj.style[name] = start + dis*n/count + 'px';
		}
		if(n == count){
			clearInterval(obj.timer);
		}
	},30);
}

function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}