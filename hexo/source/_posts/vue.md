---
title: vue3学习笔记
date: 2023-02-24 22:53:00
tags: 
  - 技术
  - 前端
categories: 
  - 前端
keyword: "好好学习技术"
description: "vue3学习笔记"
cover: /pic/vue/cover-vue.jpeg
top_img: /pic/vue/cover-vue.jpeg
---

[vue3教程](https://cn.vuejs.org/guide/introduction.html)

预备知识：HTML、CSS、JavaScript

> Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

## 基础

安装cnpm：npm install cnpm -g
安装vue-cli：cnpm install -g @vue/cli
MAC报错：npm install --ignore-scripts

![](../pic/vue/vue3-catalogue.png)

## 开始

### 简介

```html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

```js
// *.vue
// 单文件组件,模板 (HTML) 和样式 (CSS) 封装在同一个文件里
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>

```

上面示例展示了Vue的两个核心功能：
1. 声明式渲染：Vue基于标准HTML拓展了一套模版语法，使得我们可以声明式地描述最终输出的HTML和JavaScript状态之间的关系
2. 响应性：Vue会自动跟踪JavaScript状态并在其变化时响应地更新DOM

### 快速上手

```shell
npm init vue@latest
> cd <your-project-name>
> npm install
> npm run dev
# 发布到生产环境
> npm run build
```

### 创建应用

```html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

```js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

配置全局

```config
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
<!-- 组件注册 -->
app.component('TodoDeleteButton', TodoDeleteButton)
```

### 模版语法

```html
<!-- 文本插值 -->
<span>Message: {{ msg }}</span>

<!-- 原始HTML -->
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- 属性绑定 -->
<div v-bind:id="dynamicId"></div>
<!-- 简写 -->
<div :id="dynamicId"></div>
<!-- 布尔型属性 -->
<button :disabled="isButtonDisabled">Button</button>
```

<!-- 绑定多个值 -->
```js
<div v-bind="objectOfAttrs"></div>
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```

使用JavaScript表达式
```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

指令
```html
<p v-if="seen">Now you see me</p>

<a v-bind:href="url"> ... </a>

<!-- 简写 -->
<a :href="url"> ... </a>

<!-- 点击事件 -->
<a v-on:click="doSomething"> ... </a>

<!-- 简写 -->
<a @click="doSomething"> ... </a>

<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>

```

完整指令语法
![](../pic/vue/complete_instruction.png)

### 响应式基础

声明方法
```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // 在其他方法或是生命周期中也可以调用方法
    this.increment()
  }
}
```

### 计算属性
> 使用计算属性来描述依赖响应式状态的复杂逻辑

```js
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 一个计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向当前组件实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
```

```html
<p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>
```

### 类与样式绑定

### 条件渲染

```js
// v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。
<h1 v-if="awesome">Vue is awesome!</h1>

// 你也可以使用 v-else 为 v-if 添加一个“else 区块”。
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### 列表渲染

### 事件处理

### 表单输入绑定

### 生命周期

### 侦听器

### 模板引用

### 组件基础

## 深入组件

### 注册

### Props

### 事件

### 组件 v-model

### 遗传 Attributes

### 插槽

### 依赖注入

### 异步组件

## 逻辑复用

### 组合式函数

### 自定义指令

### 插件

## 内置组件

### Transition

### TransitionGroup

### KeepAlive

### Teleport

### Suspense

## 应用规模化

### 单文件组件

### 工具链

### 路由

### 状态管理

### 测试

## 最佳实践

### 生产部署

### 性能优化

### 无障碍访问

### 安全
