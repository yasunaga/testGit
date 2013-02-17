<?php
// データベースへ接続
require 'connect.php';

// パラメーターをデコード
$param = json_decode(stripslashes($_POST['data']));

// DBにデータを保存
$fmt = "
    update users set `name` = '%s', `email` = '%s', `bio` = '%s' 
    where id = %s
    ";
$sql = sprintf($fmt, $param->name, $param->email, $param->bio, $param->id);
mysql_query($sql);

// レスポンスをセット
$ret = array(
    'data' => $param,
    'success' => true
);

// json 形式で返す
echo json_encode($ret);
