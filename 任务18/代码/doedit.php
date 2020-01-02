<?php
$id = $_POST['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$city = $_POST['city'];

// var_dump($_POST);
$arr = $_POST;
$config = include './config.php';

$dsn = "mysql:host=".$config['host'].";dbname=".$config['db'].";charset=".$config['charset'];

$pdo = new PDO($dsn,$config['username'],$config['password']);

// 拼接sql语句及条件
$f = '';
foreach ($arr as $k => $v) {
    if ($k == 'id') {
        $where = "where id = {$v}";
    } else {
        $f .= "{$k}='{$v}',";
    }
}
$f = rtrim($f, ',');
var_dump($f);

$sql = "update user1 set {$f} {$where}";
$res = $pdo -> exec($sql);
if ($res) {
    echo "<script>alert('修改成功，查看信息列表');location='./list.php?page=1';</script>";
} else {
    echo "修改失败";
}

?>