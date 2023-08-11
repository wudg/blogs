---
title: 【工具类】使用AI+二维码升级扫码体验(内含详细步骤)
tags:
  - ai
  - 二维码
categories:
  - 好用工具类
keyword: chatgpt
description: 【工具类】使用AI+二维码升级扫码体验
cover: 'https://wudiguang.top/images/hexo/post/art-qr00.png'
top_img: 'https://wudiguang.top/images/hexo/post/art-qr00.png'
abbrlink: 9ac75607
date: 2023-07-07 19:51:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/art-qr00.png)

**【相关文章阅读】**

环境搭建：[进入](../82066890)
二维码尝鲜：[进入](../275dec8c)

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

### 主模型：Counterfeit-V3.0 【A022】

**【提示词1】**
主模型：Counterfeit-V3.0 【A022】
```
(masterpiece, best quality),1girl, solo, flower, long hair, outdoors, letterboxed, school uniform, day, sky, looking up, short sleeves, parted lips, shirt, cloud, black hair, sunlight, white shirt, serafuku, upper body, from side, pink flower, blurry, brown hair, blue sky, depth of field
Negative prompt: EasyNegativeV2
Steps: 25, ENSD: 31337, Size: 768x768, Seed: 2311942344, Model: CF5_Counterfeit-V3.0_fix_fix_fix, Sampler: DPM++ 2M Karras, CFG scale: 10, Clip skip: 2, Model hash: db6cd0a62d, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.45
```

**【出图1】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr04.png)

---

**【提示词11】**
主模型：Counterfeit-V3.0 【A022】
```
(masterpiece, best quality), (from above:1.4), 2girls walking along a beach together, multiple girls,sun light, long hair, footprints, beach, sand, black hair, ocean, day, shoes, walking, jacket, shore, grey skirt, black jacket, waves, pantyhose, pleated skirt, standing, shadow, smile, white skirt
Negative prompt: EasyNegativeV2
Steps: 25, ENSD: 31337, Size: 768x768, Seed: 976266318, Model: CF5_Counterfeit-V3.0_fix_fix_fix, Sampler: DPM++ 2M Karras, CFG scale: 10, Clip skip: 2, Model hash: db6cd0a62d, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.5
```

**【出图11】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr14.png)

---

**【提示词2】**
主模型：GhostMix 【A012】
```
(flat color:1.1),(colorful:1.3),(masterpiece:1.2), best quality, masterpiece, original, extremely detailed wallpaper, looking at viewer,1girl,solo,floating colorful water, <lora:blindbox_v1_mix:1>
Negative prompt: (worst quality, low quality:2), monochrome, zombie,overexposure, watermark,text,bad anatomy,bad hand,extra hands,extra fingers,too many fingers,fused fingers,bad arm,distorted arm,extra arms,fused arms,extra legs,missing leg,disembodied leg,extra nipples, detached arm, liquid hand,inverted hand,disembodied limb, small breasts, loli, oversized head,extra body,completely nude, extra navel,easynegative,(hair between eyes),sketch, duplicate, ugly, huge eyes, text, logo, worst face, (bad and mutated hands:1.3),  (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs ,(ng_deepnegative_v1_75t)
Steps: 30, ENSD: 31337, Size: 768x768, Seed: 1712913696, Model: GhostMix-V2.0-fp16-BakedVAE, Sampler: DPM++ 2M Karras, CFG scale: 7, Model hash: e3edb8a26f, Hires steps: 20, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.5
```

**【出图2】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr05.png)


**【提示词3】**
主模型：GhostMix 【A012】
```
A girl sitting on a giant ice cream, which is adorned with vibrant colors, delightful frosting, and rainbow sprinkles. She holds an oversized waffle cone,shimmering candies. Floating around her are some small balloons, each tied to a petite candy. The scene is filled with sweetness and joy, showcasing the girl's happiness and the enchanting fusion of her imagination and a fantastical world,fantasy, high contrast, ink strokes, explosions, over exposure, purple and red tone impression , abstract, ((watercolor painting by John Berkey and Jeremy Mann )) brush strokes, negative space,
Negative prompt: easynegative,ng_deepnegative_v1_75t,badhandv4,(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,normal quality,((monochrome)),((grayscale)),((watermark)),
Steps: 25, Eta: 0.2, ENSD: 31337, Size: 512x768, Seed: 3278957223, Model: XXMix_biracial_3.4fp16, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 11, Clip skip: 2, Model hash: 18ed2b6c48, Hires steps: 10, Mimic scale: 7, Hires upscale: 2, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.4, Threshold percentile: 100, Dynamic thresholding enabled: True
```

**【出图3】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr06.png)

---

**【提示词4】**
主模型：GhostMix 【A012】
```
A girl sitting on a giant ice cream, which is adorned with vibrant colors, delightful frosting, and rainbow sprinkles. She holds an oversized waffle cone,shimmering candies. Floating around her are some small balloons, each tied to a petite candy. The scene is filled with sweetness and joy, showcasing the girl's happiness and the enchanting fusion of her imagination and a fantastical world,fantasy, high contrast, ink strokes, explosions, over exposure, purple and red tone impression , abstract, ((watercolor painting by John Berkey and Jeremy Mann )) brush strokes, negative space,
Negative prompt: easynegative,ng_deepnegative_v1_75t,badhandv4,(worst quality:2),(low quality:2),(normal quality:2),lowres,bad anatomy,bad hands,normal quality,((monochrome)),((grayscale)),((watermark)),
Steps: 25, Eta: 0.2, ENSD: 31337, Size: 512x768, Seed: 3278957223, Model: XXMix_biracial_3.4fp16, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 11, Clip skip: 2, Model hash: 18ed2b6c48, Hires steps: 10, Mimic scale: 7, Hires upscale: 2, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.4, Threshold percentile: 100, Dynamic thresholding enabled: True
```

**【出图4】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr07.png)

**【提示词5】**
主模型：GhostMix 【A012】
```
(masterpiece, best quality, ultra-detailed, best shadow), (detailed background,dark fantasy), (beautiful detailed face), high contrast, (best illumination, an extremely delicate and beautiful), ((cinematic light)), colorful, hyper detail, dramatic light, intricate details, (1girl, solo,black hair, sharp face,low twintails,red eyes, hair between eyes,dynamic angle), blood splatter, swirling black light around the character, depth of field,black light particles,(broken glass),magic circle,
Negative prompt: (worst quality, low quality:1.4), zombie, (interlocked fingers),
Steps: 25, Size: 768x768, Seed: 1224977198, Model: Meina V10 - baked VAE, Version: v1.2.1, Sampler: DPM++ 2M Karras, CFG scale: 7, Clip skip: 2, Model hash: 77b7dc4ef0, Hires steps: 15, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.4
```

**【出图5】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr08.png)

**【提示词6】**
主模型：GhostMix 【A012】
```
1girl, (hanfu), sidelighting, wallpaper,
Negative prompt: (worst quality, low quality:1.4), (zombie, sketch, interlocked fingers, comic),
Steps: 40, Size: 768x768, Seed: 1616786217, Model: Meina V10 - baked VAE, Version: v1.2.1, Sampler: DPM++ SDE Karras, CFG scale: 7, Clip skip: 2, Model hash: 77b7dc4ef0, Hires steps: 15, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.4
```

**【出图6】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr09.png)

**【提示词7】**
主模型Dark Sushi Mix 大颗寿司Mix 【010】
```
(masterpiece, high quality, highres,illustration),blurry background,[(white background:1.2)::5],cowboy shot,
spring \(season\),(no light:1.1),(temptation:1.2),elegance,
(1loli:1.1),(very long hair:1.1),(blush:0.7),floating hair,ahoge,deep sky,star \(sky\),
(summer (Floral:1.2) dress:1.1),outline,(see-through:0.85),shining,low twintails,
(polychromatic peony:1.15),Movie poster,(colorful:1.1),ornament,petals,(pantyhose:1.1),
ribbon,
Negative prompt: sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,
Steps: 20, Size: 768x768, Seed: 969039108, Model: MAADBD2fp16, (blurry: 2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, Version: v1.3.2, Sampler: DPM++ 2M Karras, CFG scale: 8, Clip skip: 2, Model hash: cca17b08da, Hires steps: 20, (low quality: 2.0), (long fingers: 1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,", Hires upscale: 2, (worst quality: 2.0), Hires upscaler: Latent, (deformed fingers: 1.2), Denoising strength: 0.5, (interlocked fingers: 1.2), Ugly Fingers, (bad and mutated hands: 1.3), Wildcard negative prompt: "sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (extra digit and hands and fingers and legs and arms: 1.4), ((2girl))
```

**【出图7】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr10.png)

---

**【提示词8】**
主模型Dark Sushi Mix 大颗寿司Mix 【010】
```
masterpiece, best quality, 1girl, full body,white hair,long hair,purple eyes, slim body,slim legs,playing violin,white dress,night,moon,shootig star,cloud,lakeshore,
Negative prompt: sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,
Steps: 20, Size: 576x832, Seed: 1444986668, Model: MAADBD2fp16, (blurry: 2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, Version: v1.3.2, Sampler: DPM++ 2M Karras, CFG scale: 8, Clip skip: 2, Model hash: cca17b08da, Hires steps: 20, (low quality: 2.0), (long fingers: 1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,", Hires upscale: 2, (worst quality: 2.0), Hires upscaler: Latent, (deformed fingers: 1.2), Denoising strength: 0.5, (interlocked fingers: 1.2), Ugly Fingers, (bad and mutated hands: 1.3), Wildcard negative prompt: "sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (extra digit and hands and fingers and legs and arms: 1.4), ((2girl))
```

**【出图8】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr11.png)

---

**【提示词9】**
主模型Dark Sushi Mix 大颗寿司Mix 【010】
```
masterpiece, best quality, 1girl, full body,white hair,long hair,purple eyes, slim body,slim legs,playing violin,white dress,night,moon,shootig star,cloud,lakeshore,
Negative prompt: sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,
Steps: 20, Size: 576x832, Seed: 1444986668, Model: MAADBD2fp16, (blurry: 2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, Version: v1.3.2, Sampler: DPM++ 2M Karras, CFG scale: 8, Clip skip: 2, Model hash: cca17b08da, Hires steps: 20, (low quality: 2.0), (long fingers: 1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,", Hires upscale: 2, (worst quality: 2.0), Hires upscaler: Latent, (deformed fingers: 1.2), Denoising strength: 0.5, (interlocked fingers: 1.2), Ugly Fingers, (bad and mutated hands: 1.3), Wildcard negative prompt: "sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (extra digit and hands and fingers and legs and arms: 1.4), ((2girl))
```

**【出图9】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr12.png)

---

**【提示词10】**
主模型Dark Sushi Mix 大颗寿司Mix 【010】
```
masterpiece, best quality,extremely detailed CG unity 8k wallpaper, best quality, extremely detailed, detailed, art of light novel cover,highres,anime screencap, light novel illustration,cel shading,
(outdoors, nature,sea,blue water,blue sky with red_clouds:1.25),stars,blood moon,(fire world),(burning world),(red sea:1.5),flame flowers, grass,(detailed  transparent ruby:1.4),(colorful refraction),(floating flames:1.4),(Floating  fire:1.5) on the water,(Flowing magma:1.4),A lot of flames,
transparent and neon highlights,(legendary red crystal elf), anthropomorphic, (red crystal elements:1.8), (complex details) ,(1girl:1.3),(solo),(full body),(Standing on the Crystal Fire_lotus), (body  surrounded by fire),(flames attached to feet),(beautiful and delicate eyes), glowing red eyes,exquisite face, cowboy shot, (messy floating long blonde hair), messy hair, head decoration, small breasts,(lovely), focus, (fantasy wind), (Colorful and see-through red chiffon dress:1.3), (complex details),Flame attached to clothes, 14 years old, clamp-style, clear lines, magic effects, high resolution ,85mm, f1.8, photo realistic,
Negative prompt: sketch, duplicate, ugly, huge eyes, text, logo, monochrome, worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs
Steps: 20, Size: 768x768, Seed: 665810449, Model: MAADBD2fp16, (blurry: 2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, Version: v1.3.2, Sampler: DPM++ 2M Karras, CFG scale: 8, Clip skip: 2, Model hash: cca17b08da, Hires steps: 20, (low quality: 2.0), (long fingers: 1.2),(bad-artist-anime), bad-artist, bad hand, extra legs", Hires upscale: 2, (worst quality: 2.0), Hires upscaler: Latent, (deformed fingers: 1.2), Denoising strength: 0.5, (interlocked fingers: 1.2), Ugly Fingers, (bad and mutated hands: 1.3), Wildcard negative prompt: "sketch, duplicate, ugly, huge eyes, text, logo, monochrome, worst face, (extra digit and hands and fingers and legs and arms: 1.4), ((2girl))
```

**【出图10】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr13.png)

---

**【提示词17】**
主模型Dark Sushi Mix 大颗寿司Mix 【010】
```
(masterpiece, high quality, highres,illustration),blurry background,[(white background:1.2)::5],cowboy shot,
spring \(season\),(no light:1.1),(temptation:1.2),elegance,
(1loli:1.1),(very long hair:1.1),(blush:0.7),floating hair,ahoge,deep sky,star \(sky\),
(summer (Floral:1.2) dress:1.1),outline,(see-through:0.85),shining,low twintails,
(polychromatic peony:1.15),Movie poster,(colorful:1.1),ornament,petals,(pantyhose:1.1),
ribbon,
Negative prompt: sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2girl)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,
Steps: 20, Size: 576x832, Seed: 969039108, Model: MAADBD2fp16, (blurry: 2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, Version: v1.3.2, Sampler: DPM++ 2M Karras, CFG scale: 8, Clip skip: 2, Model hash: cca17b08da, Hires steps: 20, (low quality: 2.0), (long fingers: 1.2),(bad-artist-anime), bad-artist, bad hand, extra legs, nipples,nsfw,", Hires upscale: 2, (worst quality: 2.0), Hires upscaler: Latent, (deformed fingers: 1.2), Denoising strength: 0.5, (interlocked fingers: 1.2), Ugly Fingers, (bad and mutated hands: 1.3), Wildcard negative prompt: "sketch, duplicate, ugly, huge eyes, text, logo,  worst face, (extra digit and hands and fingers and legs and arms: 1.4), ((2girl))
```

**【出图17】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr17.png)

**【提示词19】**
主模型：majicMIX realistic 麦橘写实 【013】
```
blouse, light and shadow
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 321001525, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 25, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.14, ADetailer CFG scale: 7.0, ADetailer mask blur: 4, ADetailer dilate/erode: 8, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.12, ADetailer use inpaint width/height: True
```

**【出图19】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr15.png)

---

**【提示词12】**
主模型：majicMIX realistic 麦橘写实 【013】
```
best quality, masterpiece, (photorealistic:1.4), 1girl, light smile, shirt with collars, waist up, dramatic lighting, from below
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 3698311310, Model: majicmix_realv609, Sampler: Euler, CFG scale: 7, Clip skip: 2, Model hash: bbbb7f92f0, Hires steps: 15, Hires upscale: 2, ADetailer conf: 48, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.12, ADetailer CFG scale: 7.0, ADetailer mask blur: 4, ADetailer dilate/erode: 12, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.15, ADetailer use inpaint width/height: True
```

**【出图12】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr16.png)

**【提示词13】**
主模型：ReV Animated 【021】
```
((best quality)), ((masterpiece)), (detailed), woman with green hair, holding a sword, (Artgerm inspired:1.2), (pixiv contest winner:1.1), (octopus goddess:1.3), (Berserk art style:1.2), close-up portrait, goddess skull, (Senna from League of Legends:1.1), (Tatsumaki with green curly hair:1.2), card game illustration, thick brush, HD anime wallpaper, (Akali from League of Legends:1.1), 8k resolution
Negative prompt: 3d, cartoon, anime, sketches, (worst quality, bad quality, child, cropped:1.4) ((monochrome)), ((grayscale)),  (bad-hands-5:1.0), (badhandv4:1.0), (easynegative:0.8),  (bad-artist-anime:0.8), (bad-artist:0.8), (bad_prompt:0.8), (bad-picture-chill-75v:0.8), (bad_prompt_version2:0.8),  (bad_quality:0.8)
Steps: 30, ENSD: 31337, Size: 768x768, Seed: 2937362614, Model: rev_1.2.2, Sampler: DPM++ 2M Karras, CFG scale: 8.5, Clip skip: 2, Model hash: 66d6caba66, Hires steps: 36, Hires upscale: 2, Hires upscaler: 4x_foolhardy_Remacri, Denoising strength: 0.55
```

**【出图13】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr18.png)


**【提示词14】**
主模型：ReV Animated 【021】
```
(masterpiece),(best quality),(ultra-detailed), (full body:1.2),
1girl,chibi,cute, smile,
white Bob haircut, red eyes, earring,
white shirt,black skirt, lace legwear,
(sitting on red sofa),
seductive posture, smile,
A sleek black coffee table sits in front of the sofa and a few decorative items are placed on the shelves,
(beautiful detailed face), (beautiful detailed eyes),
 <lora:blindbox_v1_mix:1>,
Negative prompt: (low quality:1.3), (worst quality:1.3)
Steps: 28, ENSD: 31337, Size: 576x768, Seed: 3401667259, Model: revAnimated_v11, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: d725be5d18, Hires upscale: 1.5, Hires upscaler: Latent (bicubic antialiased), Denoising strength: 0.5
```

**【出图14】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr19.png)

**【提示词15】**
主模型：Cheese Daddy's Landscapes mix 【A006】
```
masterpiece, best quality, high quality,extremely detailed CG unity 8k wallpaper, An enchanting and dreamy scene of a fantasy forest, with towering trees, glowing mushrooms, and hidden fairy glens, creating a sense of mystique and enchantment, artstation, digital illustration, intricate, trending, pastel colors, oil paiting, award winning photography, Bokeh, Depth of Field, HDR, bloom, Chromatic Aberration ,Photorealistic,extremely detailed, trending on artstation, trending on CGsociety, Intricate, High Detail, dramatic, art by midjourney
Negative prompt: windows, canvas frame, cartoon, 3d, ((disfigured)), ((bad art)), ((deformed)),((extra limbs)),((close up)),((b&w)), wierd colors, blurry, (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), Photoshop, video game, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, 3d render, ((naked)), ((nude)), ((NSFW)), (((claws)))
Steps: 20, Size: 512x768, Seed: 2849651487, Sampler: DPM++ 2M Karras, CFG scale: 6, Model hash: 7ed3c68f22
```

**【提示词16】**
主模型：Babes 【A003】
```
woman, solo, stripper, light blue hair, dark blue eyes, detailed face, 
([Julianne Hough|Megan Fox|Christina Hendricks]:0.8), (puffy lips :0.9),
masterpiece, professional, high quality, beautiful, amazing, gothic, Getty Images, miko, giant,
photoshoot, 4k, realistic, detailed background, abhorrent, real life, by Walter Beach Humphrey, by Pierre Bonnard,
Negative prompt: naked, nipples, tattoo, bad anatomy, bad hands, text, error, missing fingers, extra digit, extra ears, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, out of focus, ugly, old, deformed, amateur drawing, odd, fat, morphing, black and white, monocolored, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, extra ears, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, out of focus, censorship, ugly, old, deformed, amateur drawing
Steps: 20, ENSD: 31337, Size: 768x768, Seed: 1514496775, Model: Babes_2.0_Babes_2.0, Sampler: DPM++ 2M Karras, CFG scale: 6, Model hash: 65cf944caa, Hires upscale: 2.3, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.39
```

**【出图16】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr21.png)

**【提示词17】**
主模型：Babes 【A003】
```
An ethereal female figure with delicate, luminescent wings, surrounded by glowing, magical creatures in an enchanted forest
Subsurface skin scattering, shiny skin, iridescent dress, detailed background, ([Evangeline Lilly|Adriana Lima|Adriana Lima]:0.8), round cute face, green eyes, close-up, amazing fine detail, Nikon D850 film stock photograph Kodak Portra 400 camera f1.6 lens, rich colors, lifelike texture, dramatic lighting, unreal engine, trending on ArtStation, cinestill 800 tungsten
Negative prompt: lowres, low quality, poorly drawn, blurry, 3d, cartoon, anime, dust, noise, sketches, ugly, long face, old, duplicates, twins, 2girls, mutation, lowres, low quality, doll, long neck, extra limbs, text, signature, artist name, drawing, bad anatomy, poorly drawn, malformed, deformed, blurry, out of focus,
Steps: 20, ENSD: 31337, Size: 768x768, Seed: 1242511258, Model: Babes_2.0_Babes_2.0, Sampler: DPM++ 2M Karras, CFG scale: 7, Model hash: 65cf944caa, Hires upscale: 2.25, Hires upscaler: 4x-UltraSharp, Denoising strength: 0.37
```

**【出图17】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr22.png)

**【提示词18】**
主模型：MeinaUnreal 【A016】
```
realistic, 1girl, white hair, purple eyes, glowing eyes, crop top, skirt, parted lips, blush, night, algae bloom, sun, sunlight,
Negative prompt: (worst quality, low quality:1.4), monochrome, zombie, (interlocked fingers:1.2),
Steps: 40, Size: 512x1024, Seed: 323750173, Model: MeinaUnreal V4.1 pruned, Version: v1.4.0, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: 613844c3d2, Hires steps: 15, Hires upscale: 2, Hires upscaler: R-ESRGAN 4x+ Anime6B, Denoising strength: 0.5
```

**【出图18】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr23.png)

**【提示词19】**
主模型：MajicmixReverie【A028】
权重：1.7
```
(girl:1.4), (full body), (from side), (ultra wide shot), (white dress:1.3), (white long hair:1.3), (white ribbon:1.6), (white lace:1.6), BREAK, (dark background:1.3)
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 321001525, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 25, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.14, ADetailer CFG scale: 7.0, ADetaisler mask blur: 4, ADetailer dilate/erode: 8, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.12, ADetailer use inpaint width/height: True
```

**【出图19】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr24.png)

**【提示词20】**
主模型：MajicmixReverie【A028】
权重：1.7
```
(((masterpiece))),(((bestquality))),((ultra-detailed)),(illustration),((anextremelydelicateandbeautiful)),dynamicangle,floating,(beautifuldetailedeyes),(detailedlight) (1girl), solo, floating_hair,glowingeyes,green hair,greeneyes, twintails, halterdress, <lora:atdanStyleLora_lk:0.6>, atdan, green background, <lora:animetarotV51:1>
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 321001525, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 25, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.14, ADetailer CFG scale: 7.0, ADetaisler mask blur: 4, ADetailer dilate/erode: 8, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.12, ADetailer use inpaint width/height: True
```

**【出图20】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr25.png)


**【提示词21】**
主模型：MajicmixReverie【A028】
权重：1.7
```
(masterpiece),(best quality),(ultra-detailed), (full body:1.2), 1girl,chibi,cute, smile, open mouth, flower, outdoors, playing guitar, music, beret, holding guitar, jacket, blush, tree, :3, shirt, short hair, cherry blossoms, green headwear, blurry, brown hair, blush stickers, long sleeves, bangs, headphones, black hair, pink flower, (beautiful detailed face), (beautiful detailed eyes), <lora:blindbox_v1_mix:1>,
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 321001525, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 25, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.14, ADetailer CFG scale: 7.0, ADetaisler mask blur: 4, ADetailer dilate/erode: 8, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.12, ADetailer use inpaint width/height: True
```

**【出图21】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr26.png)


**【提示词22】**
主模型：MeinaUnreal 【A028】
权重：1.7
```
masterpiece, best quality, 1girl, (colorful),(delicate eyes and face), volumatic light, ray tracing, bust shot ,extremely detailed CG unity 8k wallpaper,solo,smile,intricate skirt,((flying petal)),(Flowery meadow) sky, cloudy_sky, moonlight, moon, night, (dark theme:1.3), light, fantasy, windy, magic sparks, dark castle,white hair
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark, monochrome
Steps: 30, Size: 768x768, Seed: 321001525, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 25, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 8x_NMKD-Superscale_150000_G, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.14, ADetailer CFG scale: 7.0, ADetaisler mask blur: 4, ADetailer dilate/erode: 8, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.12, ADetailer use inpaint width/height: True
```

**【出图22】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr27.png)

**【提示词23】**
主模型：GhostMix 【A012】
```
1girl, blouse, standing among the flowers
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark
Steps: 30, Size: 512x683, Seed: 1961413425, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 15, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 4x-UltraSharp, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.15, ADetailer CFG scale: 7.0, ADetailer mask blur: 4, ADetailer dilate/erode: 12, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.16, ADetailer use inpaint width/height: True
```

**【出图23】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr28.png)

**【提示词24】**
主模型：MajicmixReverie【A028】
```
a bride holding a bouquet of flowers in her hands and a veil on her head, full-size photograph,Claire Dalby, flowers, a stock photo, romanticism,Blue solid background
HDR,UHD,8K, best quality, masterpiece
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark
Steps: 30, Size: 600x1024, Seed: 1961413425, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 15, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 4x-UltraSharp, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.15, ADetailer CFG scale: 7.0, ADetailer mask blur: 4, ADetailer dilate/erode: 12, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.16, ADetailer use inpaint width/height: True
```

**【出图24】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr29.png)

**【提示词25】**
主模型：MajicmixReverie【A028】
```
a woman in a wedding dress holding a bouquet of flowers in front of a tree with pink flowers in it, Du Qiong, cosplay, a statue, neo-romanticism
Blue solid background
HDR,UHD,8K, best quality, masterpiece
Negative prompt: nsfw, ng_deepnegative_v1_75t,badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres,watermark
Steps: 30, Size: 600x1024, Seed: 1961413425, Model: majicmix_realv6_fp16, Sampler: Euler a, CFG scale: 7, Clip skip: 2, Model hash: e4a30e4607, Hires steps: 15, Hires upscale: 2, ADetailer conf: 30, Hires upscaler: 4x-UltraSharp, ADetailer model: face_yolov8s.pt, ADetailer version: 23.5.6.post0, ADetailer x offset: 0, ADetailer y offset: 0, Denoising strength: 0.15, ADetailer CFG scale: 7.0, ADetailer mask blur: 4, ADetailer dilate/erode: 12, ADetailer inpaint full: True, ADetailer inpaint width: 512, ADetailer inpaint height: 512, ADetailer inpaint padding: 0, ADetailer denoising strength: 0.16, ADetailer use inpaint width/height: True
```

**【出图25】**

![艺术二维码](https://wudiguang.top/images/hexo/post/art-qr30.png)

## 个人微信二维码转艺术二维码

1. 微信中导出个人二维码
2. 进入草料二维码：https://cli.im/deqr，选择二维码解码器，导入第一步中生成的二维码
3. 出现解码结果页面，点击`复制`即可
4. 将第三步复制的内容拷贝到网址：`https://qrcode.antfu.me/`中，接下来按照最上面的流程来生成最佳效果的二维码
5. 接下来按照上面的教程来即可

## 欢迎加入我

### 微信公众号

![微信公众号](https://wudiguang.top/images/hexo/personal/wx_web.png)

### 微信群

![chatgpt-group](https://wudiguang.top/images/hexo/personal/chatgpt-group.jpg)


