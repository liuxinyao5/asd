<?php 
//var_dump($_POST);
$config = include './config.php';
//var_dump($config);
$link = mysqli_connect($config['host'],$config['username'],$config['password'],$config['db']);

mysqli_set_charset($link,$config['charset']);

$name = $_POST['name'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$city = $_POST['city'];
 
$sql = "insert into user1(name,age,sex,city) values('$name','$age','$sex','$city')";
//echo $sql;

$conn = mysqli_query($link,$sql);
// mysqli_insert_id() 函数返回最后一个查询中自动生成的 ID（通过 AUTO_INCREMENT 生成）。和mysqli_affected_rows返回的最后影响的行数都可以拿来做判断
$id = mysqli_insert_id($link);

if ( $conn && $id>0 ) {
    echo "插入成功";
    echo "<script>alert('添加成功，查看信息列表');location='./list.php?page=1';</script>";
} else {
    if (!$conn) {
        echo "语句发送有问题，请检查 SQL 语句";
    }

    if ($id) {
        echo "添加数据失败，数据库不能有效执行 SQL 语句";
    }
}

mysqli_close($link);