笔记
=====================================
前端
切图+js效果 		偏难 		8k-15+
交互 				简单 		15-20+

交互 		玩的就是数据

var a = 12;
var sName = 'abc';
var arr = [1,2,3,4,5,6,7,8,9];
var json = {a:1,b:2,c:3}

地址 		https://www.baidu.com/s
数据
?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=abc&rsv_pq=813e8cf300042ece&rsv_t=cf45kWzrrYhQeUIl1hd1knVddY30Lqog2koFB8oE4eYcuIkeMG0slgIDrWE&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&inputT=731&rsv_sug4=784

交互的方式：
1.
	form表单 		提交数据
		action 		提交地址
			地址加http 		走的是http协议
			地址不加http 	在本地文件找
		name 		提交数据的名字
		submit 		提交按钮
		method 		提交方式
			get 	默认
				明文提交，不安全，
				容量小（32KB），
				有缓存
			post
				密文提交，相对安全，
				容量大（1GB），
				没有缓存

	get：
			a)快.......
			b)便于分享.



想安全:https
http 	超文本传输协议
https	超安全超文本传输协议
		一般人用不了，花钱，很贵。


缓存:cache,同一个资源只会访问一次。


form已经渐渐的退出了历史的舞台
1.会不断的覆盖当前页面，用户体验,浪费钱
2.无法从服务器拿数据
=============================================
ajax 	Asynchronous Javascript And XML
	异步javascript和XML
	
	无刷新从服务器取数据

=============================================
服务器:





=============================================


ajax难不难?
	难，用着难。

cookie.js
move.js
ajax.js
==================================
ajax(地址,成功的回调函数,失败的回调函数);

回调函数:
你只需要关心定义，不需要关心调用

document.onclick=function(){
	
};

addWheel(oDiv,function(bOk){
	
});


如何检测页面是否刷新：
alert

==========================================
使用ajax注意：
1.缓存  	cache

http://www.a.com?a=1
http://www.a.com?a=2

t=Math.random()
t=new Date().getTime()

2.得到的都是字符串
	'[1,2,3]' 	->		1,2,3数组

	eval();

Uncaught SyntaxError: Unexpected token :
		交互：数据有问题


	eval()		去解析要加括号

基础知识:
var show = new Function('');

	eval的替代品
	var str = '{a:1,b:2}';
	new Function('return '+str)();

	还是使用eval,因为它比eval更不安全。
3.乱码问题
因为编码不统一

	gb-2312		中文
	utf-8 		国际编码

**注意：编码一定要统一

4.不关心后缀名
	计算机本身就不关心后缀名，它关心的只是文件里面的内容。后缀名是给人看的。

=========================================
最难的已经度过了。

局部刷新
新浪微博换一换:

	造假数据




在玩交互的时候，json必须标准写法
json标准写法的引号是双引号
{"a":"abc","b":12}


***先拿数据然后再做功能。

自己写ajax
=========================================
=========================================
写ajax
1.创建一个ajax对象
var img = new Image();
var arr =new Array();
var oDate = new Date();

var oAjax = new XMLHttpRequest();
IE7+,....
 
IE6里面默认就没有ajax.
用的插件
ActiveXObject
new ActiveXObject('Microsoft.XMLHTTP');

报错的东西能判断吗？
能判断的是真假

if(window.XMLHttpRequest){
	var oAjax = new XMLHttpRequest();
}else{
	var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
}

2.打开连接					true
oAjax.open(提交方式,地址,是否异步);
	提交方式
		GET
		POST

	异步 同时只能做一件事	同时做多件事
	同步 同时能做多件事		同时只能做一件事


3.发送
oAjax.send();
4.接收
oAjax.onreadystatechange=function(){
	if(oAjax.readyState==4){
		//判断http状态
		if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
			成功
			oAjax.responseText		
		}else{
			失败
		}
	}
};




304 	未修改

oAjax.readyState状态
0 	准备成功，未发送
1 	发送成功
2 	接收原始数据成功
3 	解析成功
4 	数据完成


接口都是后台给的。

注册登录接口
usage:	user.php?act=xxx&user=用户名&pass=密码
		act:
			add——注册用户
			login——登陆

return:	{error: 0, desc: 文字描述信息}
			error:
				0	成功
				1	失败——具体原因参考desc


浏览器都不适合处理中文。
chrome和ff没问题？因为它帮你转码了。

如何转码:
encodeURIComponent();
如何解码:
decodeURIComponent();

decodeURIComponent你前端99.9%用不到


地址 	user.php		
数据 	act=xxx&user=用户名&pass=密码	


80%程序员都挂在字符串拼接上
===========================================



get和post区别
oAjax.open('GET',url+'?'+data,true);
oAjax.send();

post:
oAjax.open('POST',url,true);
oAjax.setRequeseHeader('Content-Type','application/x-www-form-urlencoded');
oAjax.send(data);

为什么封装：
方便性，通用性


==================================
作业
ajax文件过程写了。

百度百科（真假数据）
百度新闻（真假数据）
注册登录
微博留言
许愿墙