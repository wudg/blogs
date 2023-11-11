---
title: 【前端】vue2菜鸟教程笔记
tags:
  - 技术
  - 前端
categories:
  - 前端
keyword: 好好学习技术
description: 前端_vue2菜鸟教程笔记
cover: 'https://wudiguang.top/images/hexo/vue/cover-vuex.jpeg'
top_img: 'https://wudiguang.top/images/hexo/vue/cover-vuex.jpeg'
abbrlink: 7b7fd121
date: 2023-09-07 22:53:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/vue/cover-vuex.jpeg)

## Vue 教程

### TIPS

教程地址：https://www.runoob.com/vue2/vue-tutorial.html

### 前提知识

* HTML
* CSS
* JS

### 第一个例子

见配置代码：`第一个vue2实例.html`

## Vue 安装

### 独立版本

可以在 Vue.js 的官网上直接下载 vue.min.js 并用 `<script>` 标签引入。

https://v2.vuejs.org/js/vue.min.js

### 使用 CDN 方法

* unkpg：https://unpkg.com/vue@2.6.14/dist/vue.min.js
* cdnjs：https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.min.js

### 使用 NPM

```shell
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

见配置代码：`my-project/`

```
my-project/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── styles/
│   │   └── ...
│   ├── components/
│   │   ├── MyComponent.vue
│   │   ├── AnotherComponent.vue
│   │   └── ...
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── ...
│   ├── App.vue
│   └── main.js
├── node_modules/
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── babel.config.js
├── vue.config.js
└── ...

```

* public/: 这个目录包含了静态文件，如HTML模板、图片、图标等。其中的index.html通常是应用程序的入口文件，而favicon.ico是网站的图标文件。
* src/: 这是您的Vue.js应用程序的主要代码目录。
  * assets/: 存放静态资源，如图片、样式文件等。
  * components/: 存放可复用的Vue组件。
  * views/: 存放页面级的Vue组件。
  * App.vue: 应用程序的根组件。
  * main.js: 应用程序的入口文件，通常用于初始化Vue实例和挂载到DOM上。
* node_modules/: 存放项目依赖的第三方模块。
* package.json 和 package-lock.json: 用于管理项目的依赖和配置信息。
* README.md: 项目的说明文档，通常包括项目的介绍和使用说明。
* .gitignore: Git版本控制工具的忽略文件配置。
* babel.config.js: Babel的配置文件，用于编译ES6+代码。
* vue.config.js: Vue CLI的配置文件，用于自定义构建配置。

## Vue 起步

每个 Vue 应用都需要通过实例化 Vue 来实现。

### 创建 Vue 实例

```js
var vm = new Vue({
  // 选项
})
```

见配置代码：`3. vue实例对象.html`

## Vue 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。

Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。

结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。

### 插值

见配套教程：`4. 模板语法.html`

```html
<div id="app">
    <div v-html="message"></div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>菜鸟教程</h1>'
  }
})
</script>
```

### HTML

```html
<div id="app">
    <div v-html="message"></div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>菜鸟教程</h1>'
  }
})
</script>
```

### 属性

HTML 属性中的值应使用 v-bind 指令。

```html
<div id="app">
  <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
  <br><br>
  <div v-bind:class="{'class1': use}">
    v-bind:class 指令
  </div>
</div>
    
<script>
new Vue({
  el: '#app',
  data:{
      use: false
  }
});
</script>
```

### 表达式

```html
<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    ok: true,
    message: 'RUNOOB',
    id : 1
  }
})
</script>
```

### 指令

指令是带有 v- 前缀的特殊属性。

指令用于在表达式的值改变时，将某些行为应用到 DOM 上

### 用户输入

在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：

`v-model` 指令用来在 `input、select、textarea、checkbox、radio` 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。

```html
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  }
})
</script>
```

### 过滤器

过滤器函数接受表达式的值作为第一个参数。

```html
<!-- 在两个大括号中 -->
{{ message | capitalize }}

<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
```
过滤器可以串联：

```
{{ message | filterA | filterB }}
```

### 简写

```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>

<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

## Vue 条件语句

见配套代码：`5. 条件语句.html`

条件判断使用 v-if 指令

```html
<div id="app">
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
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    type: 'C'
  }
})
</script>
```

```html
<h1 v-show="ok">Hello!</h1>
```

## Vue 循环语句

见配套代码：`6. 循环语句.html`

循环使用 v-for 指令。

v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。

v-for 可以绑定数据到数组来渲染一个列表：

```html
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.name }}
    </li>
  </ol>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
```

模板中使用 v-for：

```html
<ul>
  <template v-for="site in sites">
    <li>{{ site.name }}</li>
    <li>--------------</li>
  </template>
</ul>
```

v-for 迭代对象

```html
<div id="app">
  <ul>
    <li v-for="value in object">
    {{ value }}
    </li>
  </ul>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})
</script>
```

你也可以提供第二个的参数为键名：
```html
<div id="app">
  <ul>
    <li v-for="(value, key) in object">
    {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```

第三个参数为索引：
```html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
    </li>
  </ul>
</div>
```

v-for 迭代整数
```html
<div id="app">
  <ul>
    <li v-for="n in 10">
     {{ n }}
    </li>
  </ul>
</div>
```

## Vue 计算属性

计算属性关键词: computed。

计算属性在处理一些复杂逻辑时是很有用的。

我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

```html
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```

提供的函数将用作属性 vm.reversedMessage 的 getter 。

vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。
```html
<!-- 使用计算属性 -->
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
 
<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```

## Vue 监听属性

## Vue 样式绑定

## Vue 事件处理器

## Vue 表单

## Vue 组件

## Vue 组件-自定义事件

## Vue 自定义指令

## Vue 路由