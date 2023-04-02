---
title: 【工具类】arthas实践
date: 2023-03-23 11:23:00
tags: 
  - arthas
categories: 
  - 好用工具类
keyword: "arthas"
description: "【工具类】arthas实践"
cover: https://wudiguang.top/images/hexo/tools/cover-arthas.jpg
top_img: https://wudiguang.top/images/hexo/tools/cover-arthas.jpg
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/tools/cover-arthas.jpg)

## 简介

Arthas 是一款线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下，对业务问题进行诊断，包括查看方法调用的出入参、异常，监测方法执行耗时，类加载信息等，大大提升线上问题排查效率。

Arthas 旨在解决线上debug问题。开发人员可以在线解决生产问题。无需 JVM 重启，无需代码更改。 Arthas 作为观察者永远不会暂停正在运行的线程。

## Arthas能为你做什么？

1. 这个类从哪个 jar 包加载的？为什么会报各种类相关的 Exception？
2. 我改的代码为什么没有执行到？难道是我没 commit？分支搞错了？
3. 遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗？
4. 线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！
5. 是否有一个全局视角来查看系统的运行状况？
6. 有什么办法可以监控到 JVM 的实时运行状态？
7. 怎么快速定位应用的热点，生成火焰图？
8. 怎样直接从 JVM 内查找某个类的实例？

## 是否能在生产环境使用Arthas

## 运行Arthas并绑定目标java服务

在运行java服务的机器上，下载并运行arthas：`wget https://arthas.aliyun.com/arthas-boot.jar && java -jar arthas-boot.jar`

![arthas-plugin2](https://wudiguang.top/images/hexo/tools/arthas-cmd.png)

**开启监听**

```shell
watch com.wdg.Executor onTime '{params,returnObj,throwExp}'  -n 50  -x 3 
```

上面命令功能：监听`com.wdg.Executor`类中的`onTime`方法，循环次数为50次，解析参数深度为3层

## debug运行在docker中的java服务

第一步：`docker ps -a` 查询出目标java服务docker容器的Name

第二步：`docker exec -it $(docker ps | grep 'container name' | awk '{print $1}') /bin/bash -c "wget https://arthas.aliyun.com/arthas-boot.jar && java -jar arthas-boot.jar"`

第三步：选择对应得java服务索引

其中第二步中`container name`为docker种java服务的容器名

## IDEA搭配Arthas插件使用

[IDEA插件](https://plugins.jetbrains.com/plugin/13581-arthas-idea)

![arthas-plugin2](https://wudiguang.top/images/hexo/tools/arthas-plugin2.png)

## Arthas命令大全

[在线访问](https://arthas.aliyun.com/doc/watch.html)


## Arthas在生产环境的实践

Arthas是阿里巴巴开源的Java生产级别线上诊断工具，主要提供了实时诊断和性能剖析的能力，用户可以通过Arthas在生产环节进行代码的追踪和问题排查。以下是Arthas在生产中的实践流程：

1. 接入：首先需要在生产环境接入Arthas。可以通过在启动脚本中加入Arthas的Java Agent参数，或者利用Arthas的attach功能附加到目标JVM进程上。
2. 统计监控：配置好统计监控信息，例如CPU使用率、内存使用率等，以便在出现性能问题时追踪问题所在。
3. 实时诊断：当出现性能问题时，使用Arthas中的实时诊断功能进行问题分析。通过Arthas的各种命令，可以查看线程状态、进程状态、内存状态等信息，定位问题并进行处理。
4. 性能剖析：如果无法在实时诊断中找到问题所在，可以使用Arthas的性能剖析功能进行深入分析。通过采集方法调用、GC发生和线程等信息，对代码的瓶颈和耗时操作进行剖析，进一步提升系统性能。
5. 日志分析：使用 Arthas 的 trace 命令，在运行时获取 JVM 中方法的调用栈信息，并把相关日志打印出来，再通过日志分析工具进行分析，快速地定位问题，避免过多的上下文环境调查时间。
6. 调优优化：在诊断完成后，对出现的问题进行调优优化，对系统性能进行提升。


以上是Arthas在生产环境中的实践流程，它可以在保证系统高可用性的同时，大大提升了问题排查速度和准确性，降低了问题排查成本。

