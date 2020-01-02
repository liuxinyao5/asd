<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>添加用户</title>
</head>
<body>
    <center>
        <h3>添加用户</h3>
        <h5><a href="./list.php?page=1">查看用户</a></h5>
        <hr>
        <form action="./doadd.php" method="post">
            姓名: <input type="text" name="name" ><br/>
            年龄: <input type="text" name="age"><br/>
            性别: <input type="radio" name="sex" value="0"> 男
                <input type="radio" name="sex" value="1"> 女
                <input type="radio" name="sex" value="2" checked> 保密<br/>
            城市: <input type="text" name="city"><br/>
            <input type="submit" value="添加">
        </form>
    </center>
</body>
</html>