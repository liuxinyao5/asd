<?php
// var_dump($_GET['page']);



$link = mysqli_connect('lxy.com', 'root', '123456');

mysqli_select_db($link, 'renwu');

mysqli_set_charset($link, 'utf8');
/* *****************************制作分页******************************* */
$sql1 = "select * from user1";
$res1 = mysqli_query($link, $sql1);
$rows = mysqli_affected_rows($link);
// var_dump($rows); //数据总数
// 设置每页显示的数量、
$pagesize = 3;
// 总页数
if ($rows < $pagesize) {
    $pagecount = 0;
} elseif ($rows == $pagesize) {
    $pagecount = 1;
} elseif ($rows % $pagesize == 0) {
    $pagecount = $rows / $pagesize;
} else {
    $pagecount = intval($rows/$pagesize) + 1;
}

if (!$_GET['page']) {
    $page = 1;
} else {
    $page = $_GET['page'];
}
// var_dump($pagecount);
// 跳过条数
$num = ($page - 1) * $pagesize;

/* ********************************************************************* */
$sql = "select * from user1 limit {$num},{$pagesize}";

$res = mysqli_query($link, $sql);
// var_dump($res);

if ($res && mysqli_affected_rows($link)>0) {
    while ($row = mysqli_fetch_assoc($res)) {
        $arr[] = $row;
    }
}


mysqli_close($link);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户信息</title>
    <style>
        table {
            width: 50%;
            text-align:center;
        }
        a {
            color: orange;
        }
    </style>
</head>
<body>
    <h3 align="center">用户信息</h3>
    <h5 align="center"><a href="./index.php">添加用户</a></h5>
    <table align="center" border="1px">
        <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>城市</th>
            <th>操作</th>
        </tr>
        <?php foreach ($arr as $k => $v) { ?>
            <tr>
                <td><?php echo $v['id'] ?></td>
                <td><?php echo $v['name'] ?></td>
                <td><?php echo $v['age'] ?></td>
                <td><?php echo $v['sex'] ? ($v['sex']=='1' ? '女' : '保密') :'男'; ?></td>
                <td><?php echo $v['city'] ?></td>
                <td><a href="./edit.php?id=<?php echo $v['id']; ?>">修改</a> | <a href="./del.php?id=<?php echo $v['id']; ?>">删除</a></td>
            </tr>
        <?php } ?>
    </table>
 
        <br>
        <center>
            <?php
                if ($page == 1 || $page <= 0) {
                    echo "<a>上一页</a> | ";
                } else {
                    echo "<a href='./list.php?page=". ($page-1) ."'>上一页</a> | ";
                }
                
                if ($page == $pagecount) {
                    echo "<a>下一页</a>";
                } else {
                    echo "<a href='./list.php?page=". ($page+1) ."'>下一页</a>";
                }
            ?>
        </center>
</body>
</html>