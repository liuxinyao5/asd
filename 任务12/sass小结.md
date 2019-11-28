# sass任务小结

### 1.官方网站www.sass.hk，多看手册

### 2.使用 Sass (Using Sass)

Sass 可以通过以下三种方式使用：作为命令行工具；作为独立的 Ruby 模块 (Ruby module)；或者作为 Rack-enabled 框架的插件（例如 Ruby on Rails 与 Merb）。无论哪种方式都需要先安装 Sass gem （Windows 系统需要先[安装 Ruby](http://rubyinstaller.org/)）：

```
gem install sass
```

在命令行中运行 Sass：

```
sass input.scss output.css
```

监视单个 Sass 文件，每次修改并保存时自动编译：

```
sass --watch input.scss:output.css
```

监视整个文件夹：

```
sass --watch app/sass:public/stylesheets
```

更多命令的用法请通过 `sass --help` 获取帮助。

### 3.sass做bootstrap栅格模板文件

https://github.com/dengjianjun/gridsystem

### 4.小结

#### 1.@for

```
@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：`@for $var from  through `，或者 `@for $var from  to 
```

> @for输出的数字不是number类型，不能用于sass运算

#### 2.@each

`@each` 指令的格式是 `$var in `, `$var` 可以是任何变量名，比如 `$length` 或者 `$name`，而 `` 是一连串的值，也就是值列表。

`@each` 将变量 `$var` 作用于值列表中的每一个项目，然后输出结果，例如：

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

编译为

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

8.4.1 Multiple Assignment

The @each directive can also use multiple variables, as in @each $var1, $var2, ... in . If is a list of lists, each element of the sub-lists is assigned to the respective variable. For example:

```scss
@each $animal, $color, $cursor in (puma, black, default),
                                  (sea-slug, blue, pointer),
                                  (egret, white, move) {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```

is compiled to:

```css
.puma-icon {
  background-image: url('/images/puma.png');
  border: 2px solid black;
  cursor: default; }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
  border: 2px solid blue;
  cursor: pointer; }
.egret-icon {
  background-image: url('/images/egret.png');
  border: 2px solid white;
  cursor: move; }
```

Since maps are treated as lists of pairs, multiple assignment works with them as well. For example:

```scss
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}
```

is compiled to:

```css
h1 {
  font-size: 2em; }
h2 {
  font-size: 1.5em; }
h3 {
  font-size: 1.2em; }
```

#### 多看手册 ！