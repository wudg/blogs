---
title: 【Java】SpringCloud实战详解--翟永超
tags:
  - SpringCloud
categories:
  - java
keyword: 'Java,SpringCloud'
description: SpringCloud实战详解
cover: 'https://wudiguang.top/images/hexo/books/cover-book004.png'
top_img: 'https://wudiguang.top/images/hexo/books/cover-book004.png'
abbrlink: 39bfa02f
date: 2023-03-17 10:46:00
---

[封面图]

![封面图](https://wudiguang.top/images/hexo/books/cover-book004.png)

## 基础知识

### 什么是微服务架构

"微服务"一词源于`Martin Fowler`的名为`Microservices`的博文，可以在他的官方博客上找到：`https://martinfowler.com/articles/microservices.html`

简单地说，微服务是系统架构上的一种设计风格，它的主旨是将一个原本独立的系统拆分成多个小型服务，这些小型服务都在各自独立的进程中运行，服务之间通过基于`HTTP`的`RESTful API`进行通信写作。被拆分成的每一个小型服务都围绕着系统中的某一项或一些耦合度较高的业务功能进行构建，并且每个服务都维护着自身的数据存储、业务开发、自动化测试案例以及独立部署机制。由于有了轻量级的通信协作基础，所以这些微服务可以使用不同的语言来编写。

### 与单体系统的区别

单体应用：开发、测试、部署容易且方便。
微服务：将系统不同功能模块拆分成多个不同的服务，服务间独立部署和扩展，服务间互不影响，可以更准确地为每个服务评估性能容量，也可以更容易地发现系统的瓶颈位置，给出较为准确的系统级新年容量评估。

随着系统业务需求的增加，不断扩大的需求会使得单体应用变得越来越臃肿。

`单体应用`
1. 修改了一个很小的功能，为了部署上线就会影响其他功能的运行。
2. 单体应用中各功能模块的使用场景、并发量、消耗的资源类型都各不相同，这使得我们对各个业务模块的系统容量难以给出较为准确的评估。
3. 随着系统的发展，维护成本会变得越来越大，且难以控制。

### 如何实施微服务

* 运维的新挑战：进程数量会大大增加，有条不紊的将这些进程编排和组织也更加困难。
* 接口的一致性：需要更完善的接口和版本管理，或是严格地遵循开闭原则。
* 分布式的复杂性：各个微服务都是独立部署并运行在各自的进程内，它们之恩那个通过通信来进行协作，所以分布式环境的问题都将是微服务架构系统设计时需要考虑的重要因素，比如网络延迟、分布式事务、异步消息等。

`微服务架构的九大特性`

1. 服务组件化：组件，是一个可以独立更换和升级的单元。每一个服务都独立开发、部署，可以有效避免一个服务的修改引起整个系统的重新部署。
2. 按业务组织团队：从技术层面将团队划分为多个，如DBA团队、运维团队、后端团队、前端团队、设计师团队等、
3. 做"产品"的态度：以完成开发与交付将成果交接给维护者为最终目标。我们需要用做"产品"的态度来对待每一个微服务，持续关注服务的运作情况，并不断分析以帮助用户来改善业务功能。
4. 智能端点与哑管道：组件间的通信模式发生了改变，从原本的进程内方法调用变成RPC调用，导致微服务间产生烦琐的通信，使得系统表现更为糟糕。
5. 去中心化治理：在实施微服务架构时，通过采用轻量级的契约定义接口，使得我们对于服务本身的具体技术平台不再那么敏感，这样整个服务结构系统中的各个组件就能针对其不同的业务特点选择不同的技术平台。
6. 去中心化管理数据：将原数据库中的存储内容拆分到新的同平台的其他数据库实例中，也可以将一些具有特殊结构或业务特性的数据存储到一些其他技术的数据库实例中(如把日志信息存储到MongoDB中或把用户登录信息存储到Redis中)。
7. 基础设施自动化：实施微服务架构师，各实例大大增加，增加运维成本，因此亟需引入自动化运维。
8. 容错设计：在微服务架构中，快速检测出故障源并可能地自动恢复服务是必须被设计和考虑的。通常，我们希望在每个服务中实现监控和日志记录的组件，比如服务状态、断路器状态、吞吐量、网络延迟等关键数据的仪表盘等。
9. 演进式设计：在很多情况下，架构师都会以演进的方式进行系统的构建。在初期，以单体系统的方式来设计和实施，一方面系统体量初期并不会很大，构建和维护成本都不高。随着系统的发展或者业务的需要，架构师会将一些经常变动或是有一定时间效应的内容进行微服务处理，并逐渐将原来在单体系统中多变的模块逐步拆分处理，而稳定不太变化的模块就形成了一个核心微服务存在于整个架构之中。


`在微服务架构中，通常会使用以下两种服务调用方式`

1. 第一种，使用HTTP的RESTful API或轻量级的消息发送协议，实现信息传递与服务调用的触发。
2. 第二种，通过在轻量级消息总线上传递消息，类似RabbitMQ等一些可靠异步交换的中间件。

`微服务架构运维平台`

1. 自动化测试：每次部署前的强心剂。
2. 自动化部署：解放烦琐枯燥的重复操作以及对多环境的配置管理

### 为什么选择Spring Cloud

* 服务治理：阿里巴巴开源的Dubbo和当当网在其基础上扩展的DubboX、Netflix的Eureka、Apache的Consul等
* 分布式配置管理：百度的Disconf、Netflix的Archaius、360的QConf、Spring Cloud的Config、淘宝的Diamond等
* 批量任务：当当网的Elastic-Job、LinkedIn的Azkaban、Spring Cloud的Task等
* 服务跟踪：京东的Hydra、Spring Cloud的Sleuth、Twitter的Zipkin等

Spring Cloud的出现，可以说是微服务架构的巨大支持和强有力的技术后盾。它不像我们上面所列举的框架那样，只是解决微服务中的某一个问题，而是一个掘金微服务结构实施的综合性解决框架，它整合了诸多被广泛实践和证明过的框架作为实施的基础部件，又在该体系基础上创建了一些非常优秀的边缘组件。

### Spring Cloud简介

Spring Cloud是一个基于Spring Boot实现的微服务架构开发工具。它为微服务架构中设计的配置管理、服务治理、断路器、智能路由、微代理、控制总线、决策竞选、分布式会话和集群状态管理等操作提供了一种简单的开发方式。

* Spring Cloud Config：配置管理工具，支持使用Git存储配置内容，可以使用它实现应该配置的外部化存储，并支持客户端配置信息刷新、加密/解密配置内容等
* Spring Cloud Netflix：核心组件，对多个Netflix OSS开源套件进行整合。
  * Eureka：服务治理组件，包含服务注册中心、服务注册与发现机制的实现。
  * Hystrix：容错管理组件，实现断路器模式，帮助服务依赖中出现的延迟和为故障提供强大的容错能力。
  * Ribbon：客户端负载均衡的服务调用组件
  * Feign：基于Ribbon和Hystrix的声明式服务调用组件
  * Zuul：网关组件，提供智能路由、访问过滤等功能
  * Archaius：外部化配置组件
* Spring Cloud Bus：事件、消息总线，用于传播集群中的状态变化或事件，以触发后续的处理，比如用来永泰刷新配置等。
* Spring Cloud Cluster：针对Zookeeper、Redis、Hazelcase、Consul的选举算法和通用状态的实现
* Spring Cloud Cloudfoundry：与Pivotal Cloudfoundry的整合支持
* Spring Cloud Consul：服务发现与配置管理工具
* Spring Cloud Stream：通过Redis、Rabbit或者Kafka实现的消费微服务，可以通过简单的声明式模型来发送和接收消息
* Spring Cloud AWS：用于简化整合Amazon Web Service的组件
* Spring Cloud Security：安全工具包，提供在Zuul代理中对OAuth2客户端请求的中继器
* Spring Cloud Sleuth：Spring Cloud应用的分布式跟踪实现，可以完美整合Zipkin
* Spring Cloud Starters：Spring CLoud的基础组件，它是基于Spring Boot风格项目的基础依赖模块
* Spring Cloud CLI：用于在Groovy中快速创建Spring Cloud应用的Spring Boot CLI插件
* ...

### 版本说明

#### 版本名和版本号
由于`Spring Cloud`不像`Spring`社区其他一些项目那样独立，它是一个拥有诸多子项目的大型综合项目，可以说是对微服务架构方案的综合套件组合，其包含的各个子项目也都独立进行着内容更新与迭代，各自都维护着自己的发布版本号。因此每一个`Spring Cloud`的版本都会包含多个不同版本的子项目，为了管理每个版本的子项目清单，避免`Spring Cloud`的版本号与其子项目的版本号相混淆，没有采用版本号的方式，而是通过命名的方式。

【版本名】.【版本号】，如Angel.SR6、Brixton.SR5中的SR6、SR5就是版本号

## 微服务构建：Spring Boot

是`Spring Cloud`的基础

### 框架简介

`Spring Boot`的总之并非要重写`Spring`或是替代`Spring`，而是希望通过设计大量的自动化配置等方式来简化Spring原有样板化的配置，使得开发者可以快速构建应用。

除了解决配置问题之外，`Spring Boot`还通过一系列`Starter POMs`的定义，让我们整合各项功能的时候，不需要在`Maven`的`pom.xml`中维护那些错综复杂的依赖关系，而是通过类似模块化的Starter模块定义来应用，使得依赖管理工作变得更加简单

Spring Boot除了可以很好融入`Docker`之外，其自身就支持嵌入式的`Tomcat、Jetty`等容器。所以，通过Spring Boot构建的应用不再需要安装`Tomcat`，将应用打包成`war`，再部署到`Tomcat`这样复杂的构建与部署动作，只需要将`Spring Boot`应用打成`jar`包，并通过`java -jar`命令直接运行就能启用一个标准化的Web应用，这使得Spring Boot应用变得非常轻便。

整个Spring Boot的生态系统都是用到了`Groovy`，很自然的，我们完全可以通过使用`Gradle`和`Groovy`来开发`Spring Boot`应用，如下面短短的不足100个字符的代码，通过编译打包，使用`java -jar`命令就能启用一个返回`hello`的`RESTful API`

```java
@RestController
class App {
  @RequestMapping("/")
  String home(){
    "hello"
  }
}
```

### 快速入门

使用`https://start.spring.io/`来创建`Maven`项目，并引入`Web`依赖

* spring-boot-starter-web：全栈`Web`开发模块，包含嵌入式`Tomcat、Spring MVC`
* spring-boot-starter-test：通用测试模块，包含`JUnit、Hamcrest、Mockito`

只需要通过`mvn spring-boot:run`命令就可以快速启动`Spring Boot`应用

### 实现RESTful API

```java
@RestController
public class App {
  @RequestMapping("/")
  public String home(){
    return "Hello World";
  }
}
```

启动应用并通过浏览器访问`http://localhost:8080/hello`，我们可以看到返回了预期结果：`Hello World`

`编写单元测试`

```java
// 引入Spring对JUnit4的支持
@RunWith(SpringJUnit4ClassRunner.class)
// 指定Spring Boot的启动类
@SpringApplicationConfiguration(classes = HelloApplication.clss)
// 开启Web应用的配置，用于模拟ServletContext
@WebAppConfiguration
public class HelloApplicationTest{
  // 用于模拟调用Controller的接口发起请求，在@Test定义的hello测试用例中，perform行数执行一次请求调用，accept用于执行接收的数据类型，andExpect用于判断接口返回的期望值
  private MockMvc mvc;
  // JUnit中定义在测试用例@Test内容执行前预加载的内容，这里用来初始化对HelloController的模拟
  @Before
  public void setUp() throws Exception {
    mvc = MockMvcBuilders.standaloneSetup(new HelloController()).build();
  }

  @Test
  public void hello() throws Exception{
    mvc.perform(MockMvcRequestBuilders.get("/hello").accept(MediaType.Application_JSON)
        .andExpect(status().isOK())
        .andExpect(content().string(equalTo("Hello World")))
    );
  }
}
```


## 服务治理：Spring Cloud Eureka

## 客户端负载均衡：Spring Cloud Ribbon

## 服务容错保护：Spring Cloud Hystrix

## 声明式服务调用：Spring Cloud Feign

## API网关服务：Spring Cloud Zuul

## 分布式配置中心：Spring Cloud Config

## 消息总线：Spring Cloud Bus

## 消息驱动的微服务：Spring Cloud Stream

## 分布式服务跟踪：Spring CLoud Sleuth
