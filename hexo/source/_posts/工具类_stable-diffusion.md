---
title: 【工具类】stable diffusion体验
date: 2023-03-27 12:23:00
tags: 
  - stable-diffusion
categories: 
  - 好用工具类
keyword: "stable-diffusion"
description: "【工具类】stable diffusion体验"
cover: https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg
top_img: https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg
---

[封面图]

![封面图](..https://wudiguang.top/images/hexo/tools/stablediffusion.jpeg)

## 概述

stable diffusion 是一种基于潜在扩散模型（Latent Diffsion Models）的文本到图像生成模型，能够根据任意文本输入生成高质量、高分辨率、高逼真的图像。

Stable Diffusion原理分为以下几个步骤：

1. OpenCLIP，文本编码器，由LAION开发并得到Stability AI的支持，将文本输入转换为一个向量表示。这个向量表示可以捕捉文本的语义信息，并与图像空间对齐
2. Diffusion Model，扩展模型，将一个随机噪声图像逐渐变换为目标图像。扩散模型是一种生成模型，可以从训练数据中学习出一个概率分布，并从中采样出新的数据
3. 再扩散过程中，stable diffusion利用文本向量和噪声图像作为条件输入，给出每一步变化的概率分布。这样，stable diffusion可以根据文本指导噪声图像向目标图像收敛，并保持图像的信息都和连贯性
4. Upscaler Diffusion Model，超分辨率放大器，将生成的低分辨率图像放大到更高的分辨率。超分辨率放大器也是一个扩散模型，可以从低分辨率图像中恢复出细节信息，并增强图像质量

通过以上步骤，stable diffusion可以实现从文本到图像的生成。

stable diffusion优点：

1. 可以处理任意领域和主题的文本输入，并生成与之相符合的多样化和富有创意的图像
2. 可以生成高达`2048x2048`或更高的分辨率的图像，并保持良好的视觉效果和真实感
3. 还可以进行深度引导（Depth-guided）和结构保留（Structure-preserving）的图像转换和合成。例如，它可以根据输入图像推断出深度信息，并利用深度信息和文本条件生成新图片

