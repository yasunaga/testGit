<?php

// データベースへ接続
require 'connect.php';

// データをDBから取得
$sql = 'SELECT * FROM users';

// 結果を配列に格納
$data = array();
/*
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = $row;
}

// レスポンスをセット
$ret = array(
    'data' => $data,
    'total' => count($data),
    'success' => true
);
 */
$result = mysql_query($sql, $link);

// Httpヘッダーを出力
header("Content-Type: text/html; charset=UTF-8");

if(!$result) {
    // 結果が取り出せなかった
    $ret = array(
        'data' => array(),
        'total' => 0,
        'success' => false
    );

} else {
    // 結果を配列に格納
    $data = array();
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $data[] = $row;
    }
    mysql_free_result($result);
    $ret = array(
        'data' => $data,
        'total' => count($data),
        'success' => true
    );
}

// json 形式で返す
echo json_encode($ret);

