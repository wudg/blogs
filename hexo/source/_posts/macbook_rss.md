---
title: Mac上使用RSS
date: 2023-02-22 20:23:00
tags: 
  - rss
categories: 
  - 好用工具类
keyword: "rss"
description: "Mac上配置RSS阅读器，并订阅感兴趣的RSS源"
cover: /pic/rss_view.png
top_img: /pic/rss_view.png
---


[封面图]

![封面图](https://wudiguang.top/images/hexo/rss_view.png)

## MAC上使用RSS

文章目的：Mac上配置RSS阅读器，并订阅感兴趣的RSS源

### 什么是RSS呢？
> 简单来说，RSS就是一种简单的信息发布和传递方式，使得一个网站可以方便地调用其他提供RSS订阅服务的网站的内容，从而形成“新闻聚合”，让网站发布的内容在更大的范围内传播。

使用方式有点像订阅微信公众号，有新的文章会自动推送到我们的微信上，而RSS需要我们订阅目标资讯(根据RSS源)，这样，我们就能第一时间收到文章推送

### RSS阅读软件(Mac)-NetNewsWire
> NetNewsWire 是一个面向Mac、iPhone和iPad的免费并且开源的RSS阅读器

`官网` [下载地址1](https://netnewswire.com/)

`Github` [下载地址2](https://github.com/Ranchero-Software/NetNewsWire)

使用方法：点击左上角`+` 中的`New Web Feed...`添加 `RSS源` (见封面图)

### Hexo + RSS 配置属于我们自己的博客RSS源

尝试自己订阅自己的RSS(基于Hexo博客框架)

第一步：安装插件

```shell
npm install hexo-generator-feed --save
```

第二步：在博客根目录下的`_config.yml`新增以下配置内容

```yml
# 订阅 RSS
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
```

第三步：在themes目录中选择你当前博客应用的主题目录中`_config.yml`中新增以下内容

```yml
rss: /atom.xml
```

你的RSS源地址：http://{IP}:{PORT}/atom.xml

如博主的RSS就是：https://wudiguang.top/atom.xml

欢迎订阅～

### 推荐RSS源

下面博主已经列出一些订阅的`RSS源`，感兴趣的可以直接使用～ (截止到2023-02-22 20:35仍可用)

1. http://coolshell.cn/feed
2. https://tech.meituan.com/feed/
3. https://www.ruanyifeng.com/blog/atom.xml
4. https://sspai.com/feed
5. http://feed.williamlong.info/
6. https://www.cnblogs.com/zhengyun_ustc/rss
7. https://fookwood.com/feed
8. http://www.v2ex.com/index.xml
9. https://www.douban.com/feed/review/movie
10. https://www.douban.com/feed/review/book
11. http://www.sciencenet.cn/xml/news-0.aspx?news=0
12. https://rss.shab.fun/cctv/world
13. https://www.zhihu.com/rss