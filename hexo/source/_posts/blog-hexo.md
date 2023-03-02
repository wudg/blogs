---
title: hexo搭建个人博客
date: 2023-03-02 18:40:00
tags: 
  - hexo
categories: 
  - 搭建博客
keyword: "hexo搭建个人博客"
description: "hexo搭建个人博客"
cover: /pic/cover-hexo.jpeg
top_img: /pic/cover-hexo.jpeg
---

[封面图]

![封面图](../pic/cover-hexo.jpeg)

## 环境准备
1. 本地配置`npm`环境 [下载安装](https://link.zhihu.com/?target=https%3A//nodejs.org/en/download/)
2. 安装hexo：`npm install hexo -g` `npm install -g hexo-cli`
3. 安装部署插件：`npm install hexo-deployer-git --save`
4. 配置`git`环境
```shell
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
ssh-keygen -t rsa -C "你的GitHub注册邮箱" // 找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制
```

[GitHub_Settings_keys](https://link.zhihu.com/?target=https%3A//github.com/settings/keys)
新建`new SSH Key`

## 基本步骤

1. fork `https://github.com/full-docs/hexo-blog-hexo-template.git`
```shell
git clone https://github.com/full-docs/hexo-blog-hexo-template.git
```
2. 注册评论系统账号 `https://valine.js.org/quickstart.html`，并获取`APP ID`和`APP Key`，修改相关配置
```yml
# themes/butterfly/_config.yml
valine:
  appId: xxx
  appKey: xxx
```
3. 本地启动博客：`hexo s`，浏览器打开：`http://localhost:4000`
4. 修改`Github`地址
```yml
# _config.yml
deploy:
  type: 'git'
  repo: 'https://github.com/full-docs/hexo-blog-hexo-template.git'
  branch: 'main'
```
1. 部署到`Github` 
```shell
hexo clean
hexo g
hexo d
```

## 日常使用

1. 新增或编辑`_post`目录下的`*.md`文件
2. 在命令行中输入：`hexo s`，并在浏览器中访问：`http://localhost:4000`
3. 部署到`Github`：`hexo clean,hexo g,hexo d`