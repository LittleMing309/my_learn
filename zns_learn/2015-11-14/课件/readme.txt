笔记
==============================
文强 ，强子
电话：13718079028
qq：1677160576
缺点：语文不好，拼音没过2级，数学，语速有点快。
==============================================
js获取元素的方式：
document.getElementById()		通过id获取一个元素
obj.getElementsByTagName()		通过标签名获取一组元素
document.getElementsByName() 	通过name获取一组元素
obj.getElementsByClassName()	通过class获取一组
处理兼容：

操作属性:
. 		操作已有的属性
[] 		点能做的，[]都能做到。[]中可以放变量，.不能
getAttribute/setAttribute
配对使用，操作属性

数据类型：
string 		字符串
number 		数字
boolean 	布尔值
undefined 	未定义
object 		对象
function 	函数

数据类型转换:
显式转换
字符串-》数字
parseInt()
parseFloat()
Number()
隐式转换
-	+	*	/	%	==	>.......

数字如果转换失败，
NaN 		not a number
跟什么都不相等，isNaN来检测，如果是NaN返回true，否则返回false

返回值  return
1.如果不写return，会返回undefined
2.如果写了return，但是没有值，返回undefined
3.阻断后面的东西执行

return  		只能用在函数里面,阻断函数执行
break			跳出循环，跳出switch，
continue		跳出本次循环，继续执行下一次

DOM
获取子节点
childNodes 		获取所有子节点，包括文本节点
children 		知识获取第一层的子节点。

获取父节点
parentNode 		结构上的父级 	document
offsetParent 	定位上的父级 	body

事件
事件对象
var oEvent = ev||event;
默认事件
return false;		遇到addEventListener不行
oEvent.preventDefault();
设置捕获
setCapture		releaseCapture
事件冒泡
oEvent.cancelBubble=true;
事件绑定
	removeEventListener
obj.addEventListener(sEv,fn,false)
	事件流			在浏览器中事件的走向
	IE事件流 		冒泡
	DOM事件流 		冒泡，捕获
	detachEvent
obj.attachEvent('on'+sEv,fn)

事件委托

给父级加事件，子级也有
作用：
1，节约性能
2.给未来元素加时间
oEvent.srcElement||oEvent.target;

mouseover的bug
mouseout的bug
oEvent.fromElement||oEvent.relatedTarget;
oEvent.toElement||oEvent.relatedTarget;
obj.contains();

onmouseenter
onmouseleave

======================================
之前做的所有的运动，基本上都没有太难得。
来点有难度的。需要用到数学公式

sinα			Math.sin()
cosα 			Math.cos()

360°=2PI
180°=PI
n*PI/180
角度-》弧度
n*PI/180;

弧度-》角度
n*180/PI;


π		Math.PI

穿墙
=====================================
1.用if判断		32个判断	比较low
2.用公式算
求	方向
Math.atan2(y,x)

弧度-》角度
n*180/PI

====================================
线性，减速，加速
====================================
doMove 		有多种运动形式

Tween 		运动的各种算法

===========================================
运行在本地。
以域名为单位
没有服务器:服务器就是个电脑。
服务器：存储东西和计算
	WEB服务器:可以响应客户端的请求。

把自己的电脑变成服务器:
集成环境:
手动的启动
wamp:		windows下的集成环境
appserv:	自动启动
xampp:		mac和windows都能使用
mamp: 		mac下使用的

安装:
验证是否安装成功.
打开浏览器，输入：localhost			127.0.0.1

cookie		存储
=========================================
如何使用cookie？
什么时候使用cookie？
=========================================
cookie的特性：
1.以域名为单位
2.必须名字和值成对出现
3.cookie是存在浏览器中的
4.默认的生存周期是session
5.不能跨浏览器
6.cookie容量特别小。4KB左右。
7.cookie不安全

如何保存cookie?
document.cookie = '12';		×
document.cookie = name+'='+value; 	√

生命周期:		这个cookie到底活多久
默认的生命周期就是：session
		session		会话结束
		当关闭浏览器的时候代表了会话结束

document.cookie = 'name=value; expires='+oDate;


Date有点小问题:
统一格式：	统一变成GMT格式
oDate.toGMTString()
如果时间的格式不统一，你以后再使用的过程中这个cookie不精确。删除不掉。
document.cookie = 'name=value; expires='+oDate.toGMTString();

为了能访问到cookie所以都保存在/下
document.cookie = 'name=value; PATH=/; EXPIRES='+oDate.toGMTString();

如何获取cookie?
function getCookie(name){
	var arr = document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
}

如何删除cookie？
把cookie重新设置成过期的就行了。

拖拽：
当鼠标抬起时		保存cookie		left,top
页面加载之后		获取cookie		设置left，top

选项卡:
当执行tab函数时		保存cookie 		iNow
页面加载之后		获取cookie 		iNow

换肤:
换肤的时候 			保存cookie		skin
页面加载之后		获取cookie 		skin

关于cookie的作业：
之前的例子，找10个用cookie做一下。

==========================================
cookie***
==========================================
不愿意下课。

运动
圆，穿墙，iphone图片查看器，3D图片轮换
doMove
服务器：
cookie：
如何存，如何取，如何删除
拖拽
选项卡
换肤

=====================================
代码不要背，记的是思维，逻辑。

99乘法表
url2json
json2url
数组去重

清空数组的方式
arr.length=0;
arr = [];
arr.splice(0,arr.length);
while(arr.length){
	arr.pop()/arr.shift()
}

getPos()
==============================
作业：上课例子一遍。cookie找10个例子左。















