<?php
$act = $_POST["act"];
$user = $_POST["user"];
$pass = $_POST["pass"];

switch($act){
	case "add":
		mysql_connect("localhost","root","");
		mysql_select_db("2016-01-16");
		$res = mysql_query("SELECT * FROM user_tab WHERE username='".$user."'");
		$row = mysql_fetch_row($res);
		if($row){
			echo "{\"error\":1,\"msg\":\"T_T此用户名已存在\"}";
		}else{
			mysql_query("INSERT INTO user_tab VALUES('".$user."','".$pass."')");
			echo "{\"error\":0,\"msg\":\"^_^注册成功\"}";
		}
		break;
	case "login":
		mysql_connect("localhost","root","");
		mysql_select_db("2016-01-16");
		$res = mysql_query("SELECT * FROM user_tab WHERE username='".$user."'");
		
		$row = mysql_fetch_row($res);
		if(!$row){
			echo "{\"error\":1,\"msg\":\"T_T用户名未注册\"}";
		}else{
			if($row[1]==$pass){
				echo "{\"error\":0,\"msg\":\"^_^成功\"}";
			}else{
				echo "{\"error\":1,\"msg\":\"T_T用户名或密码错误\"}";
			}
		}
		break;
	default:
		break;
}
?>










