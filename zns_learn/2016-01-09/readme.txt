笔记
====================================
ZQuery 		自己写的一个库
====================================

# 			id选择器
.			class选择器
tab			标签选择器

input[type=button] 		属性选择器
\w+\[\w+\=\w+\]



li.on
/^\w+\.\w+$/



伪类选择器		/^\w+\:\w+(\(\d+\))?$/
li:first 				
li:last
li:even
li:odd
li:lt(2)
li:gt(2)
li:eq(2)

===========================================
jquery中
获取，默认都是获取的第一个

操作css
.css('width')
.css('width','400px')
.css({width:'400px',height:'400px'});

操作属性
.attr('type');
.attr('value','aaa');
.attr({value:'aaa',title:'bbb'});

操作内容
表单元素
.val()
.val('')
.val('abc')
非表单元素
.html()
.html('');
.html('abc');

操作class
.addClass('box');
.removeClass('box');


.animate(json,options);


事件
阻止默认事件
取消冒泡
return false;

.eq(2)			获取下标为2的ZQuery对象
.get(2) 		获取下标为2的原生对象
.index() 		获取当前元素在所有同级元素中的位置

选项卡


DOM
appendTo 			内部后面
prependTo 			内部前面
insertBefore 		外部前面
insertAfter 		外部后面

$('<strong></strong>');

oBox.insertAdjacentHTML('插入的方式','字符串标签');

appendTo 		beforeEnd	内部后面
prependTo 		afterBegin	内部前面
insertBefore 	beforeBegin	外部前面
insertAfter 	afterEnd	外部后面


删除
.remove()

==============================================
mouseenter
mouseleave
hover
toggle
show()
hide()

插件
链式


ZQuery
选择器
各种操作
事件
DOM
运动
插件
链式



https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su

========================================
ZQuery交互

==========================================
算法:步骤。		解决问题的方法

=====================================
在一个数组中查找有没有某个数字

线性查找:从头找到尾,比较笨，效率非常低.

假设：数组是有序的
二分查找:一分为二

统一偏左
1-3 		2
3,7 		5
2,8 		5
1-9 		5
2-10 		6
5-8 		6

var c = Math.floor((s+e)/2);


			最少		最多 		平均
线性 		1 			n 			n/2
二分 		1 			logn		logn/2



		 	线性 		二分 		倍数
100 		50 			3.5 		14
10000 		5000 		7 			714
100W 		50W  		10 			5W
1000W 		500W 		12 			41W
1亿 		5000W 		13.5		370W


分治法：分而治之。
	“万能”的算法。基本上99%的东西都能玩。

找最小值
去重
排序

分治法：
不一定是最好的方法，但是是一个保底的方法

===========================================
js 		1-2年
php 	3-5年
java	5-8年
算法	10+
算法跟语言无关

=====算法导论=====
==========================================
常用的排序算法:
1.冒泡排序 	bubbleSort
2.选择排序 	selectionSort
3.归并排序 	mergeSort
4.快速排序 	quickSort

======================================
数据结构:数据的结构
算法的好坏由数据结构来决定。
数据结构出来了，就决定了使用什么算法.

数据的操作:
1.增 	银行
2.删 	舆情
3.改	地图
4.查 	搜索引擎

**没有完美的算法。

算法的好坏：
1.时间
2.空间
			增 		查 		综合
有序数组 	慢 		快 		慢
无序数组 	快 		慢 		快
二叉树
binary tree


队列 	先进先出，后进后出
		排队买票

		arr.push()
		arr.shift();

		arr.unshift();
		arr.pop();


堆栈	先进后出，后进先出
		刷碗
		arr.push();
		arr.pop();

		arr.unshift();
		arr.shift();





散列  哈希  hash
如果你想快，你就付出空间。
如果你想要空间，你就付出时间。


二倍扩建。
10
20
40

==========================================
算法，数据结构



