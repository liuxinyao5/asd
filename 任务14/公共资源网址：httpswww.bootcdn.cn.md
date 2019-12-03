### 公共资源网址：https://www.bootcdn.cn/

内部有开源文件链接，js，jquery可直接引入



## jquery小结

1. $ 既是对象，也是函数

2. $和jQuery是一个对象，js库自己封装的一个核心对象

   > $ == jQuery

3. 文档就绪事件

   > $(document).ready(function(){
   >
   > ​		//开始写 jQuery 代码
   >
   > });
   >
   > 
   >
   > 以上代码工作中简写为：
   >
   > 
   >
   > $(function(){
   >
   > ​		//代码
   >
   > });
   >
   > 
   >
   > 区别于window.onload 页面加载完毕事件，范围大于ready。
   >
   > .ready()事件是元素加载完毕就执行，可以写多个，互相不影响

4. jQueryDOM对象和DOM对象可以互转

   > jQueryDOM 对象
   >
   > var $div = $('#div1');

   > DOM对象  不能调用jQueryDOM中的方法
   >
   > var div = document.getElementById('div1');

   > 通过 $ 把一个DOM对象转成jQueryDOM
   >
   > $(div1); 
   >
   > $(div1).width(200);

   > $div[0];         把jQueryDOM 转成原生DOM对象
   >
   > $div[0].style.width = '200px';