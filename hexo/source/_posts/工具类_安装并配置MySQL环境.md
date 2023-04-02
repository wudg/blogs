---
title: 【工具类】安装并配置MySQL环境
date: 2023-04-01 11:23:00
tags: 
  - mysql8
categories: 
  - 好用工具类
keyword: "【工具类】安装并配置MySQL环境"
description: "【工具类】安装并配置MySQL环境"
cover: https://wudiguang.top/images/hexo/tools/cover-mysql.jpeg
top_img: https://wudiguang.top/images/hexo/tools/cover-mysql.jpeg
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/tools/cover-mysql.jpeg)

## MySQL8

以下是在Windows环境下配置免安装版本MySQL 8的详细说明：

### 下载MySQL 8免安装版本
首先，您需要从MySQL官方网站（https://dev.mysql.com/downloads/mysql/）下载MySQL 8的免安装版本。在网站上选择适合您操作系统的版本，然后下载并解压缩文件。

**配置MySQL**

解压缩后，将MySQL文件夹移动到您想要存放MySQL的位置。

**启动MySQL服务**

启动MySQL服务非常简单，只需在MySQL的bin目录中打开命令提示符，然后运行以下命令：

```shell
mysqld --initialize-insecure
```

这个命令会启动MySQL服务并将初始密码设置为空，同时创建一个data目录，其中存储MySQL的数据库文件。

接下来，输入以下命令启动MySQL服务：

```shell
mysqld --console
```

### 连接到MySQL
接下来，您可以在命令提示符下连接到MySQL：

```shell
mysql -u root

```

在登录时不需要输入密码，直接回车即可。

### 配置MySQL
安装和连接到MySQL之后，您可以开始配置MySQL。例如，为管理员帐户设置密码，配置网络连接等等。您可以在MySQL官方文档中获得更详细的信息。

以上就是在Windows环境下配置MySQL 8免安装版本的详细步骤。

## MySQL5.7

以下是在Windows环境下配置MySQL 5.7免安装版本的详细说明：

### 下载MySQL 5.7免安装版本
首先，您需要从MySQL官方网站（https://dev.mysql.com/downloads/mysql/）下载MySQL 5.7的免安装版本。在网站上选择适合您操作系统的版本，然后下载并解压缩文件。

### 配置MySQL
解压缩后，将MySQL文件夹移动到您想要存放MySQL的位置，例如移动到 C:\Program Files 目录下。

### 配置MySQL服务

进入MySQL5.7的bin目录下，用文本编辑器打开 my.ini 文件。

找到 [mysqld] 部分，将 basedir 和 datadir 记录改为您选择的新位置。例如：

```
basedir=C:/Program Files/mysql-5.7.35-winx64
datadir=C:/Program Files/mysql-5.7.35-winx64/data
```

保存文件并关闭。

### 初始化数据库
在MySQL5.7的bin目录下，打开命令提示符窗口，输入以下命令，初始化MySQL数据目录：

```shell
mysqld --initialize-insecure --user=mysql
```

### 启动MySQL服务
在MySQL5.7的bin目录下，打开命令提示符窗口，输入以下命令，启动MySQL服务：

```shell
mysqld --console
```

### 加入系统服务
在MySQL5.7的bin目录下，打开命令提示符窗口，输入以下命令，将mysql添加到Windows的系统服务中：

```shell
mysqld --install
```

### 连接到MySQL
接下来，您可以在命令提示符下连接到MySQL：

```shell
mysql -u root -p
```

在登录时不需要输入密码，直接回车即可。

### 配置MySQL

安装和连接到MySQL之后，您可以开始配置MySQL。例如，为管理员帐户设置密码，配置网络连接等等。您可以在MySQL官方文档中获得更详细的信息。

以上就是在Windows环境下配置MySQL 5.7免安装版本的详细步骤。