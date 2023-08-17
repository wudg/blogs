---
title: 【工具类】使用AI+二维码升级扫码体验
tags:
  - ai
  - 二维码
categories:
  - 好用工具类
keyword: chatgpt
description: 【工具类】使用AI+二维码升级扫码体验
cover: https://wudiguang.top/images/hexo/post/ai-qrcode-demo07.png
top_img: https://wudiguang.top/images/hexo/post/ai-qrcode-demo07.png
abbrlink: 275dec8c
date: 2023-06-16 19:35:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/ai-qrcode-demo07.png)

Stable Diffusion创建艺术二维码,这些二维码是用经过自定义训练的ControlNet模型生成的。

[原文地址](https://stable-diffusion-art.com/qr-code/)

前提准备

1. stable diffusion V1.5 环境
2. GhostMix模型 [模型下载](https://civitai.com/models/36520/ghostmix)
3. ControlNet模型 [模型下载](https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1e_sd15_tile.pth)

## 生成一个二维码图片

生成二维码地址：https://34qr.com/en/

1. 在`Select Type`中输入二维码的目标地址
2. `Fault tolerance`选择`30%`
3. `QR Code Color`二维码颜色设置为`#000000`和`Background Color`二维码背景色设置为`#ffffff`
4. 点击`Generate`
5. `Download QR Code`选择下载`PNG`类型图片

![二维码](https://wudiguang.top/images/hexo/post/ai-qrcode01.png)

## 使用stable diffusion美化二维码

选择`img2img`菜单

1. 使用`GhostMix`模型
2. 输入正向提示词和反向提示词
```
【prompt】：a cubism painting of a town with a lot of houses in the snow with a sky background, Andreas Rocha, matte painting concept art, a detailed matte painting
【negative prompt】：ugly, disfigured, low quality, blurry, nsfw
```
![2](https://wudiguang.top/images/hexo/post/ai-qrcode02.png)
3. 上传二维码到`img2img`画布
4. 配置下面`img2img`参数
   * Resize mode: Just resize
   * Sampling method: DPM++2M Karras
   * Sampling step: 50
   * Width: 768
   * Height: 768
   * CFG Scale: 7
   * Denoising strength: 0.75
![3](https://wudiguang.top/images/hexo/post/ai-qrcode03.png)
5. 上传二维码到`ControlNet`的图片画布
6. 配置`ControlNet`的参数
   * Enable: Yes
   * Control Type: Tile
   * Preprocessor: tile_resample
   * Model: control_xxx_tile
   * Control Weight: 0.87
   * Starting Control Step: 0.23
   * Ending Control Step: 0.9 
![4](https://wudiguang.top/images/hexo/post/ai-qrcode04.png)
7. 点击`Generate`
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo01.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo02.png)
8. 打开微信，使用扫一扫确保生成的二维码有效，上面的方式生成有效的二维码的概率约为1/4

## 提示

* 文本较短的二维码成功率较高，因为图案更简单。

## 其他的提示词

### 机械女孩

```
【prompt】：1mechanical girl,ultra realistic details, portrait, global illumination, shadows, octane render, 8k, ultra sharp,intricate, ornaments detailed, cold colors, metal, egypician detail, highly intricate details, realistic light, trending on cgsociety, glowing eyes, facing camera, neon details, machanical limbs,blood vessels connected to tubes,mechanical vertebra attaching to back,mechanical cervial attaching to neck,sitting,wires and cables connecting to head
【negative prompt】：ugly, disfigured, low quality, blurry
```
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo03.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo04.png)

### 日本女孩

```
【prompt】：Japanese painting, mountains, 1girl
【negative prompt】：ugly, disfigured, low quality, blurry, nsfw
```

![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo05.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo06.png)

### 中国女孩

```
【prompt】：Chinese painting, mountains,cheongsam, 1Chinese girls
【negative prompt】：ugly, disfigured, low quality, blurry, nsfw
```

![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo07.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo08.png)

### 机器人

```
【prompt】：light, futobot, cyborg, ((masterpiece),(best quality),(ultra-detailed), (full body:1.2), 1male, solo, hood up, upper body, mask, 1boy, male focus,white gloves, cloak, long sleeves, spaceship, lightning, hires
【negative prompt】：ugly, disfigured, low quality, blurry
```

![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo09.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo10.png)


### 户外市场

```
【prompt】：A photo-realistic rendering of a busy market, ((street vendors, fruits, vegetable, shops)), (Photorealistic:1.3), (Highly detailed:1.2), (Natural light:1.2), art inspired by Architectural Digest, Vogue Living, and Elle Decor
【negative prompt】：ugly, disfigured, low quality, blurry, nsfw
```

![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo11.png)
![4](https://wudiguang.top/images/hexo/post/ai-qrcode-demo12.png)

## 浮世

```
【prompt】：((masterpiece)), ((high detail)),((ultra-detailed)),((delicate face)),A wave, a mountain, a sun rising over the horizon, complex clouds, 1 girl,white hair,<lora:fuyuestylenew-000010:1>
【negative prompt】：ugly, disfigured, low quality, blurry, nsfw
```

## 题外话

欢迎大家加入我的纯技术摸鱼群，另外如果对ChatGPT感兴趣，也可以加入我的ChatGPT讨论群，里面会定期分享免费ChatGPT资源。如果群二维码过期了，也可以添加下面我的个人微信。

### 摸鱼群
![moyu](https://wudiguang.top/images/hexo/personal/moyu.jpg)

### ChatGPT讨论小组
[【工具类】免费ChatGPT资源收录](https://wudiguang.top/post/2817151a/)

![chatgpt-group](https://wudiguang.top/images/hexo/personal/chatgpt-group.jpg)

### 个人微信
![wechat](https://wudiguang.top/images/hexo/personal/wechat.jpg)
