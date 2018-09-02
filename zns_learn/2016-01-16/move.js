'use strict';

(function(){
	var left = 0;
	var iSpeed = 20;
	window.move = function (obj,iTarget){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			iSpeed+=(iTarget-left)/5;
			iSpeed*=0.7;
			
			left = left+iSpeed;
			if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
				clearInterval(obj.timer);
			}
			obj.style.left = left +'px';
		},30);
	}
})();