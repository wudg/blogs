---
title: 【工具类】AI真人转动漫风格图片
tags:
  - 漫画图片
categories:
  - 好用工具类
keyword: chatgpt
description: 【工具类】AI真人转动漫风格图片
cover: https://wudiguang.top/images/hexo/post/img2imgart03.png
top_img: https://wudiguang.top/images/hexo/post/img2imgart03.png
abbrlink: 37cdc729
date: 2023-08-07 11:51:00
---

[封面图]

![封面图](..https://wudiguang.top/images/hexo/post/img2imgart03.png)

## 流程

1. 使用图生图，反推提示词
2. 补充特定的正向提示词和反向提示词
3. 配置其他参数
4. 选择主模型

## 图生图，反推提示词

![图生图](..https://wudiguang.top/images/hexo/post/img2imgart01.png)

按图操作，最终生成描述词：
```
a man and woman wearing masks in front of a building with a dragon statue in the background and a statue of a dragon, Bian Shoumin, full round face, a stock photo, neoplasticism
```

## 指定提示词和反向提示词

在第一步得到的提示词前，加上：`masterpiece, best quality, animegao, illustration,`

最终得到：

**正向提示词**
```
masterpiece, best quality, animegao, illustration,a man and woman wearing masks in front of a building with a dragon statue in the background and a statue of a dragon, Bian Shoumin, full round face, a stock photo, neoplasticism
```

**反向提示词**
```
(EasyNegative:1.2),NSFW, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, (ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21), (tranny:1.331), mutated hands, (poorly drawn hands:1.5), blurry, (bad anatomy:1.21), (bad proportions:1.331), extra limbs, (disfigured:1.331), (missing arms:1.331), (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051), (unclear eyes:1.331), lowers, bad hands, missing fingers, extra digit,bad hands, missing fingers, (((extra arms and legs))),lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, normal quality, jpeg artifacts, (signature, watermark, username:1.4),
```

## 其他配置

* 采样方法：DMP++ 2M Karras
* 面部修复
* 重绘幅度：0.35~0.5
* 随机种子：453604059
* CFG Scale：7
* 尺寸：按原图尺寸即可

## 选择模型

CamelliaMIx_2.5D

模型地址：https://civitai.com/models/44219/camelliamix25d

## 生成漫画风格图

![图生图](..https://wudiguang.top/images/hexo/post/img2imgart02.png)