---
title: 【工具类】安装并配置JDK环境
tags:
  - jdk
categories:
  - 好用工具类
keyword: 【工具类】安装并配置JDK环境
description: 【工具类】安装并配置JDK环境
cover: '../pic/tools/cover-jdk.jpeg'
top_img: '../pic/tools/cover-jdk.jpeg'
abbrlink: b8044510
date: 2023-04-01 10:23:00
---

[封面图]

![封面图](../pic/tools/cover-jdk.jpeg)

## 下载和安装 JDK

在 Oracle 官方网站（https://www.oracle.com/java/technologies/javase-downloads.html）上下载适合您操作系统的 JDK 版本，然后双击安装程序，按照安装向导进行安装。在安装过程中，您可以选择安装位置和其他选项。

安装完成后，打开命令行窗口（Windows键 + R，输入cmd并回车），输入以下命令，查看 JDK 是否成功安装：

```shell
java -version
```

如果安装成功，会显示 JDK 的版本信息。

## 设置环境变量

### （1）设置 JAVA_HOME 环境变量：

在 Windows 操作系统中，打开“控制面板”->“系统和安全”->“系统”，点击左侧的“高级系统设置”，在弹出的窗口中点击“环境变量”按钮。

在“环境变量”窗口中，点击“新建”按钮，在“变量名”中输入“JAVA_HOME”，在“变量值”中输入 JDK 的安装路径，例如“C:\Program Files\Java\jdk-16.0.1”。

### （2）将 JDK 中的 bin 目录添加到 PATH 环境变量中：

在“环境变量”窗口中，在“系统变量”区域中找到“Path”变量，双击该变量，将 JDK 的 bin 目录添加到变量值中，例如“C:\Program Files\Java\jdk-16.0.1\bin”。

完成以上操作后，保存并关闭窗口，打开一个新的命令行窗口，输入以下命令，查看环境变量是否设置成功：

```shell
echo %JAVA_HOME%
```

如果设置成功，会输出 JDK 的安装路径。

## 安装开发环境（IDE）

在官方网站上下载并安装一款 Java 开发环境（IDE），如 Eclipse、NetBeans 或 IntelliJ IDEA。这里以 Eclipse 为例：

在 Eclipse 官网（https://www.eclipse.org/downloads/）上下载适合您操作系统的 Eclipse 版本，解压缩到您喜欢的目录中。

运行 Eclipse，选择工作空间的位置（默认为 Eclipse 安装目录下的 workspace 目录），然后按照 Eclipse 的安装向导进行配置。

编写、编译和运行 Java 代码

在 Eclipse 中创建 Java 项目，编写 Java 代码，然后将其编译为字节码文件（.class 文件）。在 Eclipse 中运行代码，或使用 Java 命令行工具在命令行中运行 Java 应用程序。