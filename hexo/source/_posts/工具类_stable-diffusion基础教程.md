---
title: 【工具类】stable diffusion基础教程
tags:
  - stable-diffusion
categories:
  - 好用工具类
keyword: stable-diffusion,教程
description: 【工具类】stable diffusion教程
cover: 'https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg'
top_img: 'https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg'
abbrlink: 514fc98b
date: 2023-07-09 12:23:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg)

教程地址：https://www.bilibili.com/video/BV1tP41197ke

## 安装教程

### 基于启动器


### SD本地部署

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


## 图生图


