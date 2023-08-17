---
title: 【工具类】纯文本复式记账beancount
tags:
  - 复式记账
  - beancount
categories:
  - 工具
keyword: 【工具类】纯文本复式记账beancount
description: 【工具类】纯文本复式记账beancount
cover: 'https://wudiguang.top/images/hexo/post/beancount-cover.png'
top_img: 'https://wudiguang.top/images/hexo/post/beancount-cover.png'
abbrlink: eb5914ea
date: 2023-08-17 19:58:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/beancount-cover.png)

推荐阅读：[记账神器 Beancount 教程](https://sspai.com/post/59777)


## 什么是beancount

复式记账是方法论，而 Beancount 则是支持复式记账的工具

使用Beancount 记账方法叫复式记账。

* 普通记账：把只记录收支的方法
* 复式记账：除了记录收支，还需记录账户（支付宝、银行卡等）的变动

普通记账一般包括日期、收支分类和金额，如下：

```
2019-08-28: 交通-打车 -200元
```

复式记账把账户变化也一并记账，如下：

```
2019-08-28:
    交通-打车    200元
    银行卡      -200元
```

**复式记账会记录每笔交易的资金流动，各账户变化「有正有负，正负相等」。这便是复式记账的基本原理，称之为「会计恒等式」**。这种方式能够保证记账准确无误，也能提供更详细的财务分析


## Beancount 的优点

1. 完整个人财务数据比较敏感，Beancount 本地存储，不用担心数据泄露。
2. 纯文本账本，不依赖特定软件，便于数据迁移。
3. Beancount 是开源软件。

## 安装和使用

beancount 是个 Python 项目，安装好 python 后，执行：

```
pip install beancount
pip install fava
```

克隆Github现有账本Demo

```shell
git clone https://github.com/full-docs/financial-management-basic.git
```

执行命令：`fava main.bean`
出现：`Starting Fava on http://127.0.0.1:5000`

在浏览器地址栏输入：http://127.0.0.1:5000

![图](https://wudiguang.top/images/hexo/post/beancount008.png)

使用VS Code软件打开上面克隆到本地的文件夹

![图](https://wudiguang.top/images/hexo/post/beancount001.png)

**目录如下**

- 2022
  - 4.bean：2022年4月账单
  - 5.bean：2022年5月账单
  - 6.bean：2022年6月账单
- common
  - assets.bean：账户，可配置银行卡、微信零钱、支付宝余额等储蓄账户
  - equity.bean：初始化`assets.bean`中的账户余额
  - event.bean：事件，可以用来记录生活或者工作中的一些特殊事情
  - expenses.bean：消费类型
  - income.bean：收入渠道，如主页、副业等
  - liabilities.bean：负债，信用卡欠款、房贷、车贷等。
  - price.bean：暂无使用
- main.bean：主账本


**main.bean**

```
;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 账本

option "title" "我的账本" ;账本名称
option "operating_currency" "CNY" ;账本主货币

include "common/equity.bean"
include "common/income.bean"
include "common/event.bean"
include "common/expenses.bean"
include "common/assets.bean"
include "common/price.bean"
include "common/liabilities.bean"

include "2022/4.bean" ; 包含账户信息
include "2022/5.bean" ; 包含账户信息
include "2022/6.bean" ; 包含账户信息
```

## 升级使用

![图](https://wudiguang.top/images/hexo/post/beancount002.png)

在我个人使用的版本中，做了一些改造升级

### 增加了一个`all.bean`文件

在`common`目录中新增了一个`all.bean`，用来引入所有资源文件，此时`main.bean`只需要引入`all.bean`即可

```
include "assets.bean"
include "equity.bean"
include "event.bean"
include "expenses.bean"
include "fund.bean"
include "income.bean"
include "price.bean"
```
 
### 在每个年份目录下面增加了一个`当前年份.bean`

如，我在`2022`的目录中增加了`2022.bean`，用来引入所有2022年每个月份的`bean`文件，这样做能有效避免`main.bean`文件中内容太多，只需要引入对应年份的`bean`文件即可

```
; ==2022.bean文件==
;2022年每个账本文件的描述

include "4.bean"
include "5.bean"
include "6.bean"
include "7.bean"
include "8.bean"
include "9.bean"
include "10.bean"
include "11.bean"
include "12.bean"
```

此时`main.bean`就简化成了下面内容

```
;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 账本

option "title" "我的账本" ;账本名称
option "operating_currency" "CNY" ;账本主货币

include "common/all.bean"

; include "example.bean"
include "2022/2022.bean" ; 2022年度记账
include "2023/2023.bean" ; 2023年度记账
```

## 我的账本

### 损益表

![封面图](https://wudiguang.top/images/hexo/post/beancount-cover.png)

### 资产负债表

![图](https://wudiguang.top/images/hexo/post/beancount003.png)

### 日记账

![图](https://wudiguang.top/images/hexo/post/beancount004.png)

### 事件记录

![图](https://wudiguang.top/images/hexo/post/beancount005.png)

### Web编辑器

![图](https://wudiguang.top/images/hexo/post/beancount006.png)


### 日常记账

![图](https://wudiguang.top/images/hexo/post/beancount007.png)

## 欢迎加入我

### 微信公众号

![微信公众号](https://wudiguang.top/images/hexo/personal/wx_web.png)

### 个人微信(下面图片是二维码!!!)

**扫一扫识别~**

![wechat](https://wudiguang.top/images/hexo/personal/art-wechat-qrcode.jpg)
