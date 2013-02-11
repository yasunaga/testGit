<?php
// データベースへ接続
require 'connect.php';

// パラメーターをデコード
$param = json_decode(stripslashes($_POST['data']));

// DBのレコードを削除
$fmt = "delete from  users where id = %d";
$sql = sprintf($fmt, $param->id);
mysql_query($sql);
