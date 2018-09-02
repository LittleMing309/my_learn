笔记
===================================================
检测类型:typeof

instanceof 	检测父级  父级的父级


{a:1,b:2}

constructor 	检测构造函数

isArray
isJson
isString

属性给对象加
方法给类的原型加

原型
扩展系统方法
arr.indexOf()			不兼容ie8-
str.trim()
oDate.getcnDay()   			获取中文星期


==================================================
面向对象有什么特性：
	1.封装 		便于重用
	2.继承 		**父类有的子类也有
	3.多态 		多重继承

继承: 		父类有的东西，子类也有

**一切都是object

==============================================
诡异的事
Function instanceof Object 		true
Object instanceof Function 		true
Function instanceof Function  	true
Object instanceof Object 		true

Object.prototype.a = 12;
var a = 5;
a.a; 							12

a instanceof Object 			false

Object.prototype.a = 12;

var b = new Number(5);
b.a; 							12
b instanceof Object 			true

包装类

===============================================

继承怎么玩
访问一个属性或方法，先在自己身上找，如果没有找父级


人类 		Person
	属性
			name 		名字
			age 		年龄

	方法
	 		showName 	看名字
	 		showAge 	看年龄

工人类 		Worker
 	属性
 	 		name 		名字
 	 		age 		年龄
 	 		job 		工种

 	方法
 	 		showName 	看名字
 	 		showAge 	看年龄
 	 		showJob 	看工种


父级改变了，子级也会变


矫正this的指向
fn.call(要把this矫正成谁,item,item2,item3....)
fn.apply(要把this矫正成谁,[item,item2...]);


属性继承：
	父类.apply(this,arguments)
	父类.call(this,item,item2...)

方法继承:
	1.子类.prototype=父类.prototype;
		有问题:子类加方法，父类也会有
				因为引用。
	2.
	 	for(var name in 父类.prototype){
	 		子类.prototype[name]=父类.prototype[name];
	 	}

	 	瑕疵：子类 instanceof 父类      	false
	3.
		子类.prototype = new 父类();

		瑕疵：子对象.constructor==子类 		false

	4.
		子类.prototype = new 父类();
		子类.prototype.constructor=子类;

总结

属性继承
父类.call(this,item1,item2);
父类.apply(this,arguments);
方法继承
子类.prototype=new 父类();
子类.prototype.constructor = 子类;

动物类

狗类 	
猫类 	
猪类



选项卡继承
选项卡
自动播放选项卡

拖拽继承
拖拽 			Drag
限制范围拖拽 	LimitDrag
				move
带框拖拽 		FrameDrag
				down
				up



面向对象适用于大型的项目:
游戏:
		继承


==================================================
构造+原型  混合对象：

写面向对象的另一种方法：
		单例模式:
			优点：简单
			缺点：不能公共使用

===================================================
变量名冲突:
1.封闭空间
2.面向对象
3.命名空间
		YUI 		雅虎
4.模块化

事件流
DOM事件流 		高级浏览器
			冒泡阶段
			捕获阶段
IE事件流 		低版本ie
			冒泡阶段

====================================================
你读过jquery源码吗？

自己写ZQuery

选择器：
jquery不是自己写的。用的别人的Sizzle
http://sizzlejs.com/


上一次获取到的子级就是下一次获取的父级

#box ul li input

li.on
/\w+\.\w+/

input[type=button]
/\w+\[\w+\=\w+\]/

伪类
:first
:last
:even
:odd
:eq(2)
:lt(2)
:gt(2)
/\w+:\w+(\(\d+\))?/

========================================================
ZQuery
选择器
操作css
操作属性
操作内容，html，val
操作class

事件
基础事件
事件绑定
默认事件
事件冒泡

DOM操作
创建元素
添加元素
	jquery:
		appendTo
		prependTo
		insertAfter
		insertBefore
删除元素


运动


ajax
jsonp

链式操作

效果
show
hide
hover
toggle
onmouseover的bug
onmouseout的bug

插件机制

用面向对象


====================================================
ZQuery就是前面所有东西的复习。


作业：
人类，工人类继承
动物类，狗类，猫类，猪类继承
选项卡继承  选项卡，自动播放选项卡
拖拽继承，拖拽，限制范围拖拽，带框拖拽，透明拖拽
选择器







