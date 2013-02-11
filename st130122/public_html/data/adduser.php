<?php
// データベースへ接続
require 'connect.php';

// パラメーターをデコード
$param = json_decode(stripslashes($_POST['data']));
// DBにデータを保存
$fmt = "
    insert into users (`name`, `email`, `bio`) 
    values ('%s', '%s','%s')
    ";
$sql = sprintf($fmt, (string)$param->name, (string)$param->email, (string)$param->bio);
mysql_query($sql);

// 挿入したレコードのidを取得
$param->id = mysql_insert_id($link);

// レスポンスをセット
$ret = array(
    'data' => $param,
    'success' => true
);

// json 形式で返す
echo json_encode($ret);
