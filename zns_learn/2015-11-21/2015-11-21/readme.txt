笔记
==========================================
jquery
==========================================
jquery 		库。
jquery就是拿js写的。
==========================
给不会原生js的人用。
		切图
		后台
============================
js 			√
jquery 		
================================================
js  					jquery
1.window.onload 		1.$(function(){});
2.document.getById 		$('div');
3.oBtn.onclick 			$('btn').click(function(){});

jquery没有一个或一组的概念。

======================================================
效果
.hide() 			隐藏		.style.display='none';
.show() 			显示 		.style.display='block';

-=--------不要用以下的方法.
.fadeIn() 			渐入
.fadeOut() 			渐出
.slideDown() 		滑入
.slideUp() 			滑出
---------------------------
.stop();
===============================================
用这个
animate 			动画
*在使用animate的时候，必须在前面加.stop();
================================================
点击
.click(function(){});
.toggle(fn1,fn2,fn3,fn4,fn....)				切换
.hover(fn1,fn2)
=======================================================
jquery中：$是最重要的。
jquery中的选择器:

获取元素的方式:
$('#id')			通过id获取元素
$('.class') 		通过class获取元素
$('tag') 			通过tagname获取元素

层级选择器:
$('#box .on input')

属性选择器：
元素名[属性名=属性值]

伪类选择器:
:first 			第一个
:last 			最后一个
:even 			偶数
:odd 			奇数
:lt(下标) 		小于
:gt(下标) 		大于
:eq(下标) 		等于
:contains(文本) 		找到包含文本的元素
:has(标签) 				找到包含标签的元素
========================================================
css操作 			
css(样式名);					获取css样式	
css(样式名,样式值) 				设置一个css样式
css({样式名1:样式值,........})	批量设置css样式

属性操作
attr(属性名); 					获取属性
attr(属性名,属性值); 			设置一个属性
attr({属性名1:属性值,.......}) 	批量设置属性


class操作
添加class
.addClass
删除class
.removeClass

内容操作
原生：
设置，获取
表单元素	
.value='abc'; 		设置
.value;				获取
非表单元素
.innerHTML='abc'	设置
.innerHTML;			获取
jquery:
表单元素
.val(text) 		设置
.val() 			获取
非表单元素
.html(text) 	设置
.html() 		获取

在jquery中。所有的获取，只要是一组元素，默认获取的都是第一个

=============================================================
DOM操作
创建元素
$('<div>你好</div>')
添加元素
	appendTo			内部后面
	prependTo			内部前面
	insertAfter 		外部后面
	insertBefore 		外部之前
删除元素

选项卡
===================================
jquery中的this
$(this)

获取元素的索引
.index()


获取位置
获取距离定位父级的距离				原生
position().left					 	offsetLeft
position().top 						offsetTop

获取绝对位置						原生
offset().left 						getPos().left
offset().top 						getPos().top

尺寸
height()				纯高度
width() 				纯宽度
innerWidth() 			width+padding
innerHeight() 			height+padding
outerWidth() 			width+padding+border
outerHeight() 			height+padding+border


事件
=========================================
.mouseover.mouseout 	有bug
解决：		mouseenter    mouseleave   hover

事件对象:
ev直接是兼容的。

return false;		阻止默认事件，和冒泡 		
事件冒泡:
return false;
ev.stopPropagation();

阻止默认事件
ev.preventDefault();
return false;

=============================================
事件绑定		防止事件冲突
为了给一个元素加同一个事件，加多次。多人开发用。


.bind();		事件绑定
.unbind();		解除绑定
如果什么参数都不加，就把所有事件都解除，所以慎用。

==============================================
jquery中有没有循环
原生js对象 		用不了jquery的东西
jquery对象 		用不了原生的东西

可以互相转换
js对象-》jquery对象
$(js对象)
jquery对象-》js对象
[0]
get(0)

***jquery能做的js绝对能做
***js能做的jquery不一定能做。

==========================================
循环
each(function(index,element){
	index 		下标
	element 	原生对象
	this 		原生对象
});

特殊的获取元素的方式

siblings 	所有的兄弟节点

选项卡

jquery:扩展性.
插件机制
两种人：
1.用插件 		舒服,简单。什么都不用关心，直接用就好。
2.写插件 		跟舒服，挣钱。。。

写插件：
$.fn.xxx=xxx;
$.fn.extend({
	xxx:xxx
});

jquery中所有的this都是原生对象：
有例外：在插件中，this就是jquery对象。

=======================================================
作业：之前例子找30个，用jquery写。
=======================================================
放大镜

================================================
模块化:
正常开发有几个问题：
1.变量名冲突
2.需要手动引入很多js文件
3.引入的js文件有依赖关系。

==================================================
模块化:			放到服务器环境下
seajs 		 	国产 		CMD 	common module define
requirejs 		进口 		AMD 	Asynchronous module define

seajs 很简单。 		http://seajs.org/docs/
requirejs 			http://www.requirejs.org/

seajs 			
一个js文件就是一个模块
模块是由功能划分

seajs 		
定义一个模块
define(function(require,exports,module){
	require 		引入
	exports 		导出
	module 			批量导出
});
使用一个模块
seajs.use('模块名',function(mod){});

seajs.config({
	alias:{

	}
});

==============================================


