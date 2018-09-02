<?php
//mysql_connect(url,用户名,密码)
mysql_connect('localhost','root','');
//选择数据库
mysql_select_db('2016-01-16');
$SQL = 'SELECT * FROM user_tab';
$res = mysql_query($SQL);
while($row=mysql_fetch_row($res)){
	echo $row[0].','.$row[1].'<br />';
}
?>