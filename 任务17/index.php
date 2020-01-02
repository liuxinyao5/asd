<?php

$num = $_POST["number"];

// var_dump($num);
$n = intval($num);
// var_dump($n);

class Group
{
    public $members;

    public function __construct($arr)
    {
        $this -> members = $arr;
    }

    public function roll($num)
    {
        $arr1 = $this -> members;
        // var_dump($num);
        $arr2 = array_rand($this -> members, $num);
        // var_dump($arr2);
        foreach ($arr2 as $val) {
            echo $arr1[$val], '，';
        }
    }
}

$arr = ['小明', '小红', '哈士奇', '金城武', '周杰伦', '韩梅梅', '李雷'];

$gA = new Group($arr);
// var_dump($gA -> members);

// $a = array_rand($gA -> members, 2);
// var_dump($a);
// foreach($a as $val){
//     echo $arr[$val], ' ';
// }

$gA -> roll($n);


?>