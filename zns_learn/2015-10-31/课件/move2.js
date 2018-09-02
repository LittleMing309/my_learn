// 运动框架
function getStyle(obj,name){
			return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
		};

/*
	move(obj,name,target,time)
	obj  : 对象
	name:样式名
	target:目标值
	time:运动时间
*/		

var timer=null;  //全局变量 极其不好！
function	move(obj,name,target,time){
		var start=	parseFloat(getStyle(obj,name));//起始位置
		var dis =target-start;//运动距离
		var count=Math.floor(time/30);
		console.log(start);
		//运动总次数
		var n=0; // 当前运动次数
		clearInterval(timer); // 清除定时器
		timer=setInterval(function(){
			n++; //运动次数加1
			if(name=='opacity'){
				obj.style.opacity=	start+dis*n/count;
				obj.style.filter='alpha(opacity:'+(start+dis*n/count)*100+')'	;
			}else{
				obj.style[name]=start+dis*n/count+'px'; 
				//对象.样式名=起始位置+运动距离*(当前运动次数/运动总次数)
			}
			if(n==count){ //如果当前运动次数与总次数相等(最后一次)
					clearInterval(timer); //停止定时器
			}
		},30);
	}