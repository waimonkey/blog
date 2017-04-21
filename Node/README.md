## Node 介绍
![node-logo](./assets/img/Node.js_logo.svg.png)

### 为什么要学习 Node

1. 打开服务端黑盒子
2. 招聘需求: 需要具有衣服那个的服务端开发经验
3. 如果纯粹的前端想要向高级前端发展,服务端就是瓶颈

### Node 是什么

- [官网](http://nodejs.org/en/)
- [维基百科](http://zh.wikipedia.org/wiki/Node.js)
- [深入浅出Node.js(一):什么是Node.js](http://www.infoq.com/cn/articles/what-is-nodejs)
- []
   
- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.
  + NodeJS 是一个构建于 Chorme V8 引擎之上的一个 JavaScript 运行时环境
  + Node 可以向浏览器一样去解析和执行 JavaScript 代码
  + JavaScript 是一个动态脚本语言
    * 预编译
    * 再执行
  + JavaScript 之前的解析和执行一直停留在浏览器环境
    * 通过编译解析引擎,解析和变异 JavaScrupt 脚本代码
    * Chrome V8 引擎是所有浏览器中解析个执行 JS 代码最快的
    * Node 作者把 Chrome V8 引擎一直出来,基于 V8 引擎之上 构建了一系列的 API
      - 例如:
        + 文件操作
        + 网络操作
        + 让 JavaScript 代码具有了服务器的编程能力
    * 在 Node 中没有界面,不在需要关心 html css
    * 只需要关心 JavaScript
    * 和 DOM Style 等没有任何关系了
    * 纯粹的 JavaScript 代码: ECMAScript
      - var
      - function
      - object
      - Date
      - Math
    * 
- js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
  + 事件驱动
  + 非阻塞 IO 模型: 大量的异步编程接口
    * 充满了客户端中 ajax 一样的 API
    * 异步:只要有异步一定有回调
  + 跨平台
  + 单线程
  + 轻量和高效
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
  + npm 是世界上最大的开源库生态系统
  + 在 npm 上发布的第三方包已经接近 35 万之多
  + 包只能帮你解决某一个单一的问题,解决不了你的业务

### 特点

### 可以做什么
Node 就是为 JavaScript 提供了服务端变成的能力(不处理UI)
- 服务端编程: Java PHP Python .Net Ruby 等能做的 Node 都能做
- 网站开发,提供网站服务端
- 数据库交互
- 移动应用:后台
- 网络游戏: 后台
- CLI (Command Line Interface) 程序
  + gulp
  + hexo
  + git (基于C语言写的)
  + Node 具有开发命令行工具的能力
    * webpack
    * http-server 在终端中快速提供一个服务
    * browser-sync 童工楼兰器自刷新的能力


### 应用场景

虽然 Node 很强大,而且也是前端进阶必备的一个技能
- 适用于:
  + 对 IO 操作比较频繁的惭怍
    * 文件读写
    * 和数据库交互:网络数据 IO
- 实时通信
  + 聊天:微信 QQ 直播



### 一些资源

## 起步

### 环境安装
### 使用 nvm 安装和管理 Node (补充)

