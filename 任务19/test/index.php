<?php

// $db = new \Sj\Database();   //工厂模式就是用一个工厂方法来替换掉这种直接new对象的操作；
// 工厂方法看1.php
// 这样使用时就可写成
$db = Sj\Factory::createDatabase();
// 工厂模式这样做的好处是 Database这个类在很多php文件都做过new操作，这样后期如果这个类里做过修改的话，每个php文件可能都要修改代码，但是工厂模式只需要在工厂方法中把类的名称或参数修改即可。很多其他高级设计模式都依赖于工厂模式

// 单例模式构造方法设置为私有，外层不可以通过new来获取对象，只能通过设置的静态方法来获取实例
$db = Sj\Database::getInstance();
// 这个方法实现了单例模式，无论调用多少次都只会创建一次对象；
$db = Sj\Database::getInstance();
$db = Sj\Database::getInstance();
$db = Sj\Database::getInstance();
$db = Sj\Database::getInstance();




?>