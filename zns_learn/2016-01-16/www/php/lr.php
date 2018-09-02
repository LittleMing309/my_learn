<?php
/*
	用户注册与登录
*/
$user = $_GET['user'];
$pass = $_GET['pass'];

if($user=="eric"&&$pass=="123"){
	echo "成功";
}else if($user=="张三"&&$pass=="1234"){
	echo "成功";
}else{
	echo "失败";
}
?>