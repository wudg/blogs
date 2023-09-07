---
title: 【前端】vue2菜鸟教程笔记
tags:
  - 技术
  - 前端
categories:
  - 前端
keyword: 好好学习技术
description: 前端_vue2菜鸟教程笔记
cover: 'https://wudiguang.top/images/hexo/vue/cover-vue.jpeg'
top_img: 'https://wudiguang.top/images/hexo/vue/cover-vue.jpeg'
date: 2023-09-07 22:53:00
---

## Vue 教程

### TIPS

教程地址：https://www.runoob.com/vue2/vue-tutorial.html

### 前提知识

* HTML
* CSS
* JS

### 第一个例子

`第一个vue2实例.html`

## Vue 安装

### 独立版本

可以在 Vue.js 的官网上直接下载 vue.min.js 并用 <script> 标签引入。

https://v2.vuejs.org/js/vue.min.js

### 使用 CDN 方法

* unkpg：https://unpkg.com/vue@2.6.14/dist/vue.min.js
* cdnjs：https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.min.js

### 使用 NPM

```	
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install vue
# 全局安装 vue-cli
cnpm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
vue init webpack my-project
# 这里需要进行一些配置，默认回车即可
# 进入项目目录
cd my-project
# 安装依赖包
npm install
# 运行项目
npm run dev
# 项目打包
npm run build
```

双击打包后的`/dist/index.html`页面可能空白，可以将`index.html`文件中的`js、css`路径改成相对路径，修改后双击`index.html`就可以看到效果了


## Vue 目录结构

## Vue 起步

## Vue 模板语法

## Vue 条件语句

## Vue 循环语句

## Vue 计算属性

## Vue 监听属性

## Vue 样式绑定

## Vue 事件处理器

## Vue 表单

## Vue 组件

## Vue 组件-自定义事件

## Vue 自定义指令

## Vue 路由