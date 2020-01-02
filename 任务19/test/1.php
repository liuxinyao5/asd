<?php
namespace Sj;
// 工厂模式
class Factory
{
    static function createDatabase()
    {
        // $db = new Database;
        // 使用单例后工厂模式这里就不能直接new了
        $db = Database::getInstance();
        return $db;
    }
}


?>