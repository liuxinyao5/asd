<?php
$config = include './config.php';
// var_dump($config);
$dsn = "mysql:host=".$config['host'].";dbname=".$config['db'].";charset=".$config['charset'];

$pdo = new PDO($dsn,$config['username'],$config['password']);

// var_dump($pdo);
$id = $_GET['id'];

$sql = "delete from user1 where id={$id}";

$num = $pdo -> exec($sql);  //exec返回影响的行数，查询数据建议用query

if ($num) {
    echo '删除成功';
    echo "<script>alert('删除成功，查看信息列表');location='./list.php?page=1';</script>";
} else {
    echo '删除失败';
}


?>