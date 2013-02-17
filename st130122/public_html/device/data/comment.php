<?php
// データベースへ接続
require 'connect.php';

// フィルター指定の読み出し
$filter = json_decode(stripslashes($_GET['filter']));

// データをDBから取得
$property = $filter[0]->property;
$value = $filter[0]->value;
$sql = "SELECT * FROM comments WHERE $property = $value";
$result = mysql_query($sql, $link);

// 結果を配列に格納
$data = array();
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = $row;
}
// レスポンスをセット
$ret = array(
    'data' => $data,
    'total' => count($data),
    'success' => true
);

// json 形式で返す
echo json_encode($ret);
