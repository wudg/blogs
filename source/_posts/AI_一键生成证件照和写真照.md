---
title: 【工具类】一键生成证件照和写真照
tags:
  - 证件照
categories:
  - AI
keyword: sd
description: 【工具类】一键生成证件照和写真照
cover: https://wudiguang.top/images/hexo/post/easy-photo01.png
top_img: https://wudiguang.top/images/hexo/post/easy-photo01.png
abbrlink: 352eca1e
date: 2023-11-15 11:21:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/easy-photo01.png)

## 环境

stable-diffusion-webui版本：1.6.0
主模型：Chilloutmix-Ni-pruned-fp16-fix.safetensors
插件：EasyPhoto(https://github.com/aigc-apps/sd-webui-EasyPhoto.git)

第一次使用，会在控制台自动加载2个基础模型和4个controlnet模型

1. Chilloutmix-Ni-pruned-fp16-fix
2. SDXL_1.0_ArienMixXL_v2.0
3. control_sd15_random_color.pth
4. control_v11f1e_sd15_tile.pth
5. control_v11p_sd15_canny.pth
6. control_v11p_sd15_openpose.pth

## 使用

### 训练模型

![封面图](https://wudiguang.top/images/hexo/post/cover-easy-photo.png)

按上面步骤开始训练模型，点击`Start Training`，并给本地训练取个别名，这里我命名为`demo`


### 生成证件照

![封面图](https://wudiguang.top/images/hexo/post/easy-photo02.png)
