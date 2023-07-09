---
title: 【工具类】stable diffusion基础教程
tags:
  - stable-diffusion
categories:
  - 好用工具类
keyword: 'stable-diffusion,教程'
description: 【工具类】stable diffusion教程
cover: 'https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg'
top_img: 'https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg'
abbrlink: '82066890'
date: 2023-07-09 12:23:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg)

教程地址：https://www.bilibili.com/video/BV1tP41197ke

## 安装教程

### 基于启动器（内部集成了必备插件）

**下载资源**

关注微信公众号，回复【sd】即可获得百度网盘下载地址

`百度网盘下载提速：` 设置 -> 传输 -> 优化速率 -> 去开启

经实验，提速后能达到10M/秒以上

**安装并运行**

1. 解压`sd-webui-aki-v4.1.zip`
2. 将`可选controlnet1.1\模型`文件夹下面的所有文件拷贝到`sd-webui-aki-v4.1\models\ControlNet`目录下
3. 将`可选controlnet1.1\预处理器`文件夹下面的`download`文件夹拷贝到`sd-webui-aki-v4.1\extensions\sd-webui-controlnet\annotator`目录下
4. 双击`启动器运行依赖-dotnet-6.0.11.exe`，安装即可，此时环境已配置完成
5. 双击`sd-webui-aki-v4.1\A启动器.exe`运行服务，运行成功后，会自动跳转到浏览器中并打开`http://127.0.0.1:7860/?__theme=dark`网址

### SD本地部署

Github残酷地址：https://github.com/AUTOMATIC1111/stable-diffusion-webui

**安装步骤**

![本地安装](https://wudiguang.top/images/hexo/post/sd-setting.png)

安装完成后，在浏览器中访问：http://127.0.0.1:7860/?__theme=dark

## 文生图

### 基础知识

**SD大模型：CheckPoints（CKPT）**

* 大模型就是SD的大心脏
* 作用：定义出图风格
* 特点：文件非常大 2GB~10GB
* 文件类型：safetensors/ckpt结尾

todo 这里贴上3个主流大模型的效果区别

大模型安装目录：stable-diffusion-webui\models\Stable-diffusion

**VAE**

* 名称：变分自编码器
* 作用：增加图片饱和度，降低灰度，让图片有更多色彩
* 常用：vae-ft-840000-ema-pruned.safetensors

VAE安装目录：stable-diffusion-webui\models\VAE

**Clip skip 跳过层**

* 语言与图片对比预训练，让tag与图形建立关系
* 数值越高：tag与图片关系就会越低
* 数值越低：tag和图片关系就会越高
* 默认1就行

**Prompt 正向提示词**

写想出现的元素tag

**Negative Prompt 反向提示词**

写不想出现的元素tag

**tag格式**

靠前的tag权重比较高

* 仅支持英文
* 单词,单词
* 词组,词组
* 语句 (推荐) AI识别度高

**权重**

* 括号法则（括号可以叠加，效果为单个括号的指数次方）
  * ()=增加1.1倍
  * {}=增加1.05倍
  * []=减少1.1倍
* 数字法则（建议0.5~1.6之间）
  * (tag:1.3)=增加1.3倍权重
  * (tag:0.5)=0.5倍的权重
  * 大于1就是增加
  * 小于1就是减少
* 混合
  * AND大法：让不同元素或主题做混合，如 tiger AND cow
  * [tag|tag]大法：[tiger|cow]，加入步数是10步，1，3，5，7，9渲染tiger，2，4，6，8，10渲染cow

**Sampling steps（采样步数）**

* 范围1~150
* 数值越高：细节越多，渲染越满
* 数值越低：细节越少，渲染越快
* 建议范围：20~40

**Sampling method（采样器）**

* a：噪点不居中，管家此识别度稍低
* karras：去噪快
* DDIM & PLMS：SD最早的采样器（过时）
* DPM：比较建议使用DPM++SDE karras

**面部修复**

渲染人物图时记得勾上，提高SD对人体面部的细节捕捉

**无缝贴图**

生成纹理

**高分辨率修复**

把模糊的图片变清晰

**宽度|高度**

图片分辨率（像素）

一般使用 512*512 和 768*768

和显存大小相关

**生成次数|每次数量**

* 生成次数：一个一个生成x张图（显存低用这个）
* 每次数量：同时生成x张图（显存高用这个）

**CFG Scale**

文字和图片的相关度

* 数值高：tag和图片的相关度就高
* 数值低：tag和图片的相关度就低

建议4~9之间

**随机种子**

* 色子：重置种子为-1（出图完全随机）
* 循环标志：复制上一张图的种子

随机数差异种子：略

### 模板预设

### ControlNet


## 图生图


