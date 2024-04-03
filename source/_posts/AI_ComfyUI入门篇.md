---
title: 【AI】ComfyUI入门篇
tags:
  - ComfyUI
  - AI
categories:
  - AI
keyword: 【AI】ComfyUI入门篇
description: 【AI】ComfyUI入门篇
cover: 'https://wudiguang.top/images/hexo/ai/comfy01.png'
top_img: 'https://wudiguang.top/images/hexo/ai/comfy01.png'
abbrlink: 9daf51d0
date: 2024-01-28 19:12:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/ai/comfy01.png)

节点化

准备模型(ComfyUI\models\checkpoints)：

1. sd_xl_base_1.0_0.9vae_2.safetensors
2. sd_xl_refiner_1.0_0.9vae_2.safetensors

## 工作流样例

官网：https://comfyanonymous.github.io/ComfyUI_examples/

### 高分辨率修复

高分辨率修复只是创建一个较低分辨率的图像，然后将其放大，然后通过img2img进行处理

在ComfyUI中，txt2img和img2img是相同的节点。通过向采样器节点传递一个空图像并设置最大降噪，即可实现Txt2Img。

### 图生图

Img2Img的工作原理是通过加载像这个示例图像一样的图像，使用VAE将其转换为潜在空间，然后在其上进行采样，采样时降噪程度小于1.0

降噪程度控制添加到图像的噪音量。降噪程度越低，添加的噪音越少，图像的变化也越小。

### 重绘


### Lora

