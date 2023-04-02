## vue

### 什么是vue

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

### 最基本的示例

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
 
```html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

Vue 的两个核心功能：

1. 声明式渲染：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
2. 响应性：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。

## vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式， 采用集中式存储管理应用的所有组件的状态，解决多组件数据通信。

### vuex组成

1. state： 统一定义公共数据（类似于data(){return {a:1, b:2，xxxxxx}}）
2. mutations ： 使用它来修改数据(类似于methods)
3. getters： 类似于computed(计算属性，对现有的状态进行计算得到新的数据-------派生 )
4. actions： 发起异步请求
5. modules： 模块拆分

## router

