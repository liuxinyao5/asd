# git建立个人博客

## 先尝试使用jekyll建立本地模板

### **在Ubuntu 18.04上安装Jekyll**

1. 我们将首先将所有系统软件包更新到最新版本，然后继续安装Jekyll：

   $ sudo apt-get update

   > 这个命令，会访问源列表里的每个网址，并读取软件列表，然后保存在本地电脑。我们在新立得软件包管理器里看到的软件列表，都是通过update命令更新的。

   $ sudo apt-get upgrade

   > 这个命令，会把本地已安装的软件，与刚下载的软件列表里对应软件进行对比，如果发现已安装的软件版本太低，就会提示你更新。如果你的软件都是最新版本，会提示：
   > 升级了 0 个软件包，新安装了 0 个软件包，要卸载 0 个软件包，有 0 个软件包未被升级。

   Jekyll需要一个包含库的Ruby开发环境，使用以下命令安装Jekyll和必需的构建工具：

   $ sudo apt-get install make build-essential

   安装Ruby包和开发工具：

   $ sudo apt-get install ruby ruby-dev

2. 安装jekyll:

   > sudo apt install jekyll

3. 安装好jekyll后  可以使用 "jekyll new 文件夹名" 命令创建一个jekyll默认模板库，cd进入新创建的文件夹中再使用 "jekyll server"命令建立本地静态网站，在浏览器输入 127.0.0.1:4000 进入本地静态网站查看模板加载是否成功

   > 注：国外模板因引入有境外链接有可能加载失败，使用国内创建的模板基本无此问题，jekyll server可以直接成功

### 使用git远程仓库托管项目

1. 新建远程仓库

   > 使用 用户名.github.io 格式作为新建库名称，创建好后即可登陆同名网址 https://用户名.github.io

2. 创建本地仓库与远程仓库建立连接
3. 将模板文件从本地仓库（文件夹）推送至远程仓库master分支，稍等一会即可通过链接 https://用户名.github.io 访问模板网页