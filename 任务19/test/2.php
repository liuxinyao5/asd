<?php
namespace Sj;

// 单例模式。我们工作中比如使用数据库类时，其他模式会多次连接数据库，造成资源浪费，使用单例模式可以节省资源。
class Database
{
    // 设置一个私有或保护的属性
    protected $db;

    // 首先将构造方法声明为private私有的，这样在外层直接去new就会报错，像上面的例子避免了在其他地方创建数据库连接的操作
    private function __construct()
    {

    }

    // 第二步声明一个静态方法 getInstance()
    static function getInstance()
    {
        if (self::$db) {
            return self::$db;
        } else {
            self::$db = new self();
            return self::$db;
        }
        self::$db = new self();
    }
}


?>