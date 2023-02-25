---
title: vuex学习笔记
date: 2023-02-25 10:33:00
tags: 
  - 技术
  - 前端
categories: 
  - 认真阅读
keyword: "好好学习技术"
description: "vuex学习笔记"
cover: /pic/vue/cover-vuex.jpeg
top_img: /pic/vue/cover-vuex.jpeg
---

[封面图]

![封面图](../pic/vue/cover-vuex.jpeg)

[在线学习](..//pic/vue/cover-vuex.jpeg)

## 概述

### 组件之间共享数据

1. 父向子传值：`v-bind 属性绑定`
2. 子向父传值：`v-on 事件绑定`
3. 兄弟组件之间共享数据：`EventBus`
   1. $on  接收数据的那个组件
   2. $emit 发送数据的那个组件

### Vuex
> Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享

![](../pic/vue/vuex.png)

### 使用Vuex统一管理状态的好处

1. 能够在Vuex中集中管理共享的数据，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储在Vuex中的数据都是响应式的，能够实现保持数据与页面的同步


### 什么样的数据是和存储到Vuex中

一般情况，只有组件之间共享的数据，才有必要存储到Vuex中，对于组件中的私有数据，依旧存储在组件自身的data中即可

## vuex基本使用

1. 安装vuex依赖包

```shell
npm install vuex --save
# 指定版本
sudo npm install vuex@3.6.2 --save
```

2. 导入vuex包

```vue
import Vuex from 'vuex'
Vue.use(Vuex)
```

3. 创建store对象

```vue
const store = new Vuex.Sotre({
    // state中存放的就是全局共享的数据
    state: {count: 0}
})
```

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
```

4. 将store对象挂载到vue实例中

```vue
new Vue({
    el: '#app',
    render: h => h(app),
    router,
    // 将创建的共享数据对象，挂载到Vue实例中
    // 所有的组件，就可以直接从store中获取全局的数据了
    store
})
```

## vuex核心概念

### 核心概念
* State
* Mutation
* Action
* Getter

### State
> State提供唯一的公共数据源，所有共享的数据都要统一放在Store的State中进行存储

```vue
<!-- 创建store数据源，提供唯一公共数据 -->
const store = new Vuex.Store({
    state: {count: 0}
})
```

1. 组件访问State中数据的第一种方式

```vue
<!-- template中访问this可以省略 -->
this.$store.state.全局数据名称
```

2. 组件访问State中数据的第二种方式

```vue
// 1. 从Vuex中按需导入 mapState 函数
import {mapState} from 'vuex'
```

通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性

```vue
computed: {
    ...mapState(['count'])
}
```

### Mutation
> Mutation用于变更Store中的数据

1. 只能通过Mutation变更Store数据，不可以直接操作Store中的数据
2. 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化

```vue
const store = new Vuex.store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            //变更状态
            state.count++
        }
    }
})
```
