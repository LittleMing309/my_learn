<?php
$page = $_GET["page"];
$PAGE_SIZE = 10;
mysql_connect("localhost","root","");
mysql_select_db("2016-01-16");
$res = mysql_query("SELECT * FROM flow_tab LIMIT ".($page-1)*$PAGE_SIZE.",".$PAGE_SIZE);

$result = "[";
$first = true;

while($row=mysql_fetch_row($res)){
	if($first){
		$result.="'".$row[0]."'";
		$first = false;
	}else{
		$result.=",'".$row[0]."'";	
	}
	
}
$result.="]";
echo $result;
?>






