

### 数据库操作小结

1. set names utf8;    设置字符集编码，每次操作数据库前都需要设置
2. \s    查看数据库设置
3. 20个字符以内的类属性，建议使用char(20)，效率更快

### mysqli

https://www.runoob.com/php/php-ref-mysqli.html

$link = mysqli_connect('127.0.0.1', 'root', '123456');

mysqli_select_db($link, '库名');

mysqli_set_charset($link, 'utf8');

$sql = sql语句;

$res = mysqli_query($link, $sql);

到这一步可以用来做判断的

mysqli_affected_rows($link);	返回上一次发送语句所影响的行数

mysqli_insert_id($link);	返回最后一个查询中自动生成的 ID

获取的到的数据以关联数组的形势返回

while ($row = mysqli_fetch_assoc($res)) {

​	$arr[] = $row;

}	

//上面mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。

返回代表读取行的关联数组。如果结果集中没有更多的行则返回 NULL。

mysqli_close($link);



### PDO类

可以查看手册

$dsn = "mysql:host=localhost;dbname=库名[;charset=utf8]";

$pdo = new PDO($dsn, $user, $pass);

然后通过 $pdo->方法  来调用方法。

$pdo->exec()可以用来发送增删改语句；

查询语句要用$pdo->query()来发送，会返回一个结果处理对象，PDOStatement 对象

$res *=* $pdo *->* **query**($sql);



如果是查询一条的话用fetch，多条使用fetchaAll，fetchAll可以不用填参数，选填的参数参考php手册

$arr *=* $res *->* **fetch**(PDO*::*FETCH_ASSOC);     //获取的是一维数组，可以直接拿来用

// $arr = $res -> fetchAll();   //获取的是二维数组