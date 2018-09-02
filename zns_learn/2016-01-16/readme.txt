笔记
===================================================
高级运动

弹性

总距离->目标-开始

iSpeed+=(300-left)/5;

iSpeed-=(left-300)/5;
iSpeed+=-(left-300)/5;

iSpeed+=(-left+300)/5;
iSpeed+=(300-left)/5;

碰撞

===================================================
php:
1.使用广泛  
2.简单
3.语法跟javascript很相像

===================================================
标签		所有的php代码都要写在这个标签里面
<?php
	//code
?>

输出:
echo 

变量
js
var 变量名 = 变量值;
php
$变量名 = 变量值;


安全性：跟前端没有关系。


函数：
js
function show(a,b){
	
}
php
function show($a,$b){
	
}

php专一:
+ 		就是运算

字符串拼接
		.

操作属性
js
oDiv.style.background
php
oDiv->style->background

=============================================
后台语言：98%都是处理数据

交互
form
ajax

	get
	post


php如何来获取前端提交的数据?
GET

$_GET['参数名字'];


用户注册登录


把数据存放起来。
用数据库
使用mysql:
1.免费
2.轻量，简单
3.mysql和php是好基友。

数据库
库 	相当于文件夹，起到一个管理的作用。
表 	真正写数据

行 	一行数据
列 	一项数据


1. 创建一个库
2.创建表

Number of fields:列数
2

类型
CHAR 			字符 			'a'   'b'
VARCHAR 		字符串 		 	"abcds"		255
TEXT 			大字符串 		"fdfs" 		
INT 			整数
DATE 			日期
DOUBLE 			两位小数
FLOAT 			单位小数



php如何操作数据库
ajax 					php->mysql
创建ajax对象 			建立连接
打开连接 				选择数据库
发送请求 				写SQL语句
接收响应 				拿到结果

SQL语言 		DBA

查询语句
SELECT * FROM user_tab


连接 
mysql_connect(url,username,password);
选择数据库
mysql_select_db(database_name);
写查询语句
$res = mysql_query(sql);
获取结果
$row = mysql_fetch_row($res);

while($row=mysql_fetch_row($res)){
	
}

===============================================
user.php?act=xxx&user=xxx&pass=xxx
		act
			add 		注册
			login 		登录

		return 
			{error:0/1,msg:'详细信息'}


SQL查询语句条件
SELECT * FROM 表名 WHERE

SELECT * FROM user_tab WHERE username='eric';

SELECT * FROM user_tab WHERE username='eric' AND password='123'

INSERT INTO user_tab VALUES('zhangsan','123');


=================================================
瀑布流

SELECT * FROM flow LIMIT 从哪开始拿,拿多少

page_size 10
(1-1)*10
0 		10
2
10 		10
3 
20 		10
4
30 		10


php,mysql结束了。
===========================================
nodejs 		语言 	
1.性能好 	php86倍
 	php 	200台 		400万
 	node 	3台 		6万

 	node 	1s
 	php 	86s

2.跟js语法一模一样。
3.跟js配合度很高
	php 	1994
	js 		1995

	node 	2009

中间层
===============================================
https://nodejs.org/en/

安装 	下一步
检测是否安装成功
node --version

使用node创建服务

http1.1

作者已经帮我们研究好了。不需要我们自己研究

require('http');

常用端口
80 			web
21/22 		ftp
110 		邮件

自定义端口 8081


nodejs
==============================================
操作数据库  mysql
并不支持操作数据库
如果你想操作，需要安装包.

http://npmjs.com/

安装使用npm安装
node package manager

===================================================
mysql包
npm install mysql

==================================================
简历
1.写简历
	基本信息
		姓名
		性别
		出生日期 2000年05月
		学历：本科
		手机：
		QQ：
		邮箱：sina.163.gmail.
		现居地：北京市 朝阳区 小区


	求职意向
		目标职位：web前端工程师
		期望薪资：
		状态：已离职，可随时入岗
	专业技能
		html,css 	熟练
		javascript 	熟练
		jquery 		熟练
		seajs，requirejs 	熟悉
		bootstrp   熟练
		ajax，jsonp 		精通
		熟练运用面向对象变成思想编写代码。
		html5，css3 		熟练


	工作经验
		看个人。。。。。。
		公司名称	任职时间
		职位
	项目经验
		看个人。。。。。。
		项目名 周期
		描述
		职责
		遇到的问题
		怎么解决的
	个人评价
		唱高调，扯大旗。
		热爱各种技术，喜欢钻研各种技术
		性格开朗，可尽快融入团队。有很强的团队开发能力。
		有较好抗压能力，可以承受适量的加班。
2.投简历
	1.官方
	2.第三方
	拉钩，100offer ，周伯通，猎聘，boss直聘

面试
=============================================
字符串，数组，Math常用方法
日期对象
正则
作用于
面向对象
继承
原型
作用域链

封闭空间 自执行函数 闭包 js代码

原型链

=================================================











































































































































