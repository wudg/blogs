---
title: 【工具类】使用AI+二维码升级扫码体验
tags:
  - ai
  - 二维码
categories:
  - 好用工具类
keyword: chatgpt
description: 【工具类】使用AI+二维码升级扫码体验
cover: https://wudiguang.top/images/hexo/post/art-qr00.png
top_img: https://wudiguang.top/images/hexo/post/art-qr00.png
abbrlink: 275dec8c
date: 2023-07-07 19:51:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/art-qr00.png)

## 生成发散的二维码

网址：https://qrcode.antfu.me/

将生成好的二维码文件保存下来，用于后面的步骤

![普通二维码](https://wudiguang.top/images/hexo/post/art-qr01.png)

## 生成艺术二维码

### 所需模型下载(ControlNet)

* 主模型：https://civitai.com/models/4468/counterfeit-v30
* brightness：https://huggingface.co/ioclab/ioc-controlnet/blob/main/models/control_v1p_sd15_brightness.safetensors
* qucodemonster：https://huggingface.co/monster-labs/control_v1p_sd15_qrcode_monster/tree/main

上面在第二个模型网站中下载两个文件：control_v1p_sd15_qrcode_monster.safetensors和control_v1p_sd15_qrcode_monster.yaml

于是，我们得到了下面4个文件，其中1个主模型和3个ControlNet模型及配置

1. control_v1p_sd15_brightness.safetensors
2. control_v1p_sd15_qrcode_monster.safetensors
3. control_v1p_sd15_qrcode_monster.yaml
4. Counterfeit_V30.safetensors【主模型】

### 将上面下载好的文件放入对应的目录中

主模型：stable-diffusion-webui\models\Stable-diffusion
ControlNet模型：stable-diffusion-webui\extensions\sd-webui-controlnet\models

### 描述词如下

```
(masterpiece, best quality),1girl with long white hair sitting in a field of green plants and flowers, her hand under her chin, warm lighting, white dress, blurry foreground
Negative prompt: EasyNegativeV2
Steps: 25, ENSD: 31337, Size: 768x768, Seed: 1293666383, Model: CF5_Counterfeit-V3.0_fix_fix_fix, Sampler: DPM++ 2M Karras, CFG scale: 10, Clip skip: 2, Model hash: db6cd0a62d, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.5
```

### 安装和配置ControlNet插件

### 安装ControlerNet

插件名：sd-webui-controlnet
插件git地址：	https://github.com/Mikubill/sd-webui-controlnet.git

1. 选择菜单：Extensions -> Available
2. 点击 `Load From：`，在列表中搜索`controlnet`，找到对应的插件点击右侧的`Install`进行安装。
3. 重启本地`stable diffusion`服务
4. 选择菜单：Settings -> ControlNet(在左侧) 
5. 将`Multi ControlNet: Max models amount (requires restart)`的值设置为4（大于1即可）
6. 重启本地`stable diffusion`服务

### 配置ControlNet

**第一个ControlNet Unit**

![配置1](https://wudiguang.top/images/hexo/post/art-qr02.png)

**第二个ControlNet Unit**

![配置2](https://wudiguang.top/images/hexo/post/art-qr03.png)

### 生成目标艺术二维码


`tips：` 这里要注意，生成艺术二维码是有一定的失败率的，要想生成自己期望的艺术二维码，需要多尝试几次。

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr00.png)

## 一些例子

### 主模型：Counterfeit-V3.0

**【提示词1】**

```
(masterpiece, best quality),1girl, solo, flower, long hair, outdoors, letterboxed, school uniform, day, sky, looking up, short sleeves, parted lips, shirt, cloud, black hair, sunlight, white shirt, serafuku, upper body, from side, pink flower, blurry, brown hair, blue sky, depth of field
Negative prompt: EasyNegativeV2
Steps: 25, ENSD: 31337, Size: 1024x512, Seed: 2311942344, Model: CF5_Counterfeit-V3.0_fix_fix_fix, Sampler: DPM++ 2M Karras, CFG scale: 10, Clip skip: 2, Model hash: db6cd0a62d, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.45
```

**【出图1】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr04.png)

---

### 主模型：GhostMix

**【提示词2】**

```
(flat color:1.1),(colorful:1.3),(masterpiece:1.2), best quality, masterpiece, original, extremely detailed wallpaper, looking at viewer,1girl,solo,floating colorful water, <lora:blindbox_v1_mix:1>
Negative prompt: (worst quality, low quality:2), monochrome, zombie,overexposure, watermark,text,bad anatomy,bad hand,extra hands,extra fingers,too many fingers,fused fingers,bad arm,distorted arm,extra arms,fused arms,extra legs,missing leg,disembodied leg,extra nipples, detached arm, liquid hand,inverted hand,disembodied limb, small breasts, loli, oversized head,extra body,completely nude, extra navel,easynegative,(hair between eyes),sketch, duplicate, ugly, huge eyes, text, logo, worst face, (bad and mutated hands:1.3),  (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs ,(ng_deepnegative_v1_75t)
Steps: 30, ENSD: 31337, Size: 512x768, Seed: 1712913696, Model: GhostMix-V2.0-fp16-BakedVAE, Sampler: DPM++ 2M Karras, CFG scale: 7, Model hash: e3edb8a26f, Hires steps: 20, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.5
```

**【出图2】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr05.png)


**【提示词3】**

```
A girl sitting on a giant ice cream, which is adorned with vibrant colors, delightful frosting, and rainbow sprinkles. She holds an oversized waffle cone,shimmering candies. Floating around her are some small balloons, each tied to a petite candy. The scene is filled with sweetness and joy, showcasing the girl's happiness and the enchanting fusion of her imagination and a fantastical world,fantasy, high contrast, ink strokes, explosions, over exposure, purple and red tone impression , abstract, ((watercolor painting by John Berkey and Jeremy Mann )) brush strokes, negative space,
Negative prompt: easynegative,ng_deepnegative_v1_75t,badhandv4,(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,normal quality,((monochrome)),((grayscale)),((watermark)),
Steps: 25, Eta: 0.2, ENSD: 31337, Size: 512x768, Seed: 3278957223, Model: XXMix_biracial_3.4fp16, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 11, Clip skip: 2, Model hash: 18ed2b6c48, Hires steps: 10, Mimic scale: 7, Hires upscale: 2, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.4, Threshold percentile: 100, Dynamic thresholding enabled: True
```

**【出图3】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr06.png)

---

**【提示词4】**
```
A girl sitting on a giant ice cream, which is adorned with vibrant colors, delightful frosting, and rainbow sprinkles. She holds an oversized waffle cone,shimmering candies. Floating around her are some small balloons, each tied to a petite candy. The scene is filled with sweetness and joy, showcasing the girl's happiness and the enchanting fusion of her imagination and a fantastical world,fantasy, high contrast, ink strokes, explosions, over exposure, purple and red tone impression , abstract, ((watercolor painting by John Berkey and Jeremy Mann )) brush strokes, negative space,
Negative prompt: easynegative,ng_deepnegative_v1_75t,badhandv4,(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,normal quality,((monochrome)),((grayscale)),((watermark)),
Steps: 25, Eta: 0.2, ENSD: 31337, Size: 512x768, Seed: 3278957223, Model: XXMix_biracial_3.4fp16, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 11, Clip skip: 2, Model hash: 18ed2b6c48, Hires steps: 10, Mimic scale: 7, Hires upscale: 2, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.4, Threshold percentile: 100, Dynamic thresholding enabled: True
```

**【出图4】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr07.png)

**【提示词5】**
```
(masterpiece, best quality, ultra-detailed, best shadow), (detailed background,dark fantasy), (beautiful detailed face), high contrast, (best illumination, an extremely delicate and beautiful), ((cinematic light)), colorful, hyper detail, dramatic light, intricate details, (1girl, solo,black hair, sharp face,low twintails,red eyes, hair between eyes,dynamic angle), blood splatter, swirling black light around the character, depth of field,black light particles,(broken glass),magic circle,
Negative prompt: (worst quality, low quality:1.4), zombie, (interlocked fingers),
Steps: 25, Size: 512x1024, Seed: 1224977198, Model: Meina V10 - baked VAE, Version: v1.2.1, Sampler: DPM++ 2M Karras, CFG scale: 7, Clip skip: 2, Model hash: 77b7dc4ef0, Hires steps: 15, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.4
```

**【出图5】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr08.png)

**【提示词6】**
```
1girl, (hanfu), sidelighting, wallpaper,
Negative prompt: (worst quality, low quality:1.4), (zombie, sketch, interlocked fingers, comic),
Steps: 40, Size: 512x1024, Seed: 1616786217, Model: Meina V10 - baked VAE, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 7, Clip skip: 2, Model hash: 77b7dc4ef0, Hires steps: 15, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.4
```

**【出图6】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr09.png)

## 个人微信二维码转艺术二维码

1. 微信中导出个人二维码
2. 进入草料二维码：https://cli.im/deqr，选择二维码解码器，导入第一步中生成的二维码
3. 出现解码结果页面，点击`复制`即可
4. 将第三步复制的内容拷贝到网址：`https://qrcode.antfu.me/`中，接下来按照最上面的流程来生成最佳效果的二维码
5. 接下来按照上面的教程来即可

![微信公众号](https://wudiguang.top/images/hexo/personal/wx_web.png)


