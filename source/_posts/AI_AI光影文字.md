---
title: 【工具类】AI光影文字
tags:
  - 光影文字
categories:
  - AI
keyword: AI
description: 【工具类】AI光影文字
cover: https://wudiguang.top/images/hexo/ai/ai-shallow-02.png
top_img: https://wudiguang.top/images/hexo/ai/ai-shallow-02.png
abbrlink: c48a9624
date: 2024-03-06 00:45:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/ai/ai-shallow-02.png)

## 制作黑底白字的图

图片尺寸（像素）：768x512

![如图](https://wudiguang.top/images/hexo/ai/ai-shallow-01.png)


## 模型&Prompt&参数

**模型**：ghostmix_v20Bakedvae

```shell
raining night ,village road,
Negative prompt: blush,extra fingers,fewer fingers,(low quality, worst quality:1.4), (bad anatomy), (inaccurate limb:1.2),bad composition, inaccurate eyes, extra digit,fewer digits,(extra arms:1.2),umbrella,
Steps: 20, Size: 768x512, Seed: 1883261138, Model: CetusMix_WhaleFall2, Version: v1.3.1, Sampler: DPM++ 2M Karras, CFG scale: 7, Clip skip: 2, Model hash: 876b4c7ba5, Hires steps: 10, Hires upscale: 2, Hires upscaler: SwinIR_4x, Denoising strength: 0.5
```

**ControlNet配置**

* 控制权重：0.4~0.7
* 引导介入时机：0.2
* 引导终止时机：0.4~0.7

![如图](https://wudiguang.top/images/hexo/ai/ai-shallow-03.png)
