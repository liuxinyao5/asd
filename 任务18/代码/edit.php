<?php
$id = $_GET['id'];
$config = include './config.php';
$dsn = "mysql:host=".$config['host'].";dbname=".$config['db'].";charset=".$config['charset'];

$pdo = new PDO($dsn,$config['username'],$config['password']);

$sql = "select id,name,age,sex,city from user1 where id={$id}";

$res = $pdo -> query($sql);

$arr = $res -> fetch(PDO::FETCH_ASSOC);     //获取的是一维数组，可以直接拿来用
// $arr = $res -> fetchAll();   //获取的是二维数组
// var_dump($arr);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>修改信息</title>
</head>
<body>
    <center>
        <h3>修改用户信息</h3>
        <h5><a href="./list.php?page=1">查看用户</a></h5>
        <hr>
        <form action="./doedit.php" method="post">
            姓名: <input type="text" name="name" value="<?php echo $arr['name']; ?>"><br/>
            年龄: <input type="text" name="age" value="<?php echo $arr['age']; ?>"><br/>
            性别: <input type="radio" name="sex" value="0" <?php echo $arr['sex']=='0'?'checked':''; ?>> 男
                <input type="radio" name="sex" value="1" <?php echo $arr['sex']=='1'?'checked':''; ?>> 女
                <input type="radio" name="sex" value="2"  <?php echo $arr['sex']=='2'?'checked':''; ?>> 保密<br/>
            城市: <input type="text" name="city" value="<?php echo $arr['city']; ?>"><br/><br>
            <input type="hidden" name="id" value="<?php echo $arr['id']; ?>">
            <input type="submit" value="确认修改">
        </form>
    </center>
</body>
</html>