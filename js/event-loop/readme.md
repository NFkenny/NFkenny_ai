# event loop
- 事件循环机制 JS 执行机制

- js 单线程
  同一时刻只做一件事
  同步任务尽快执行完，渲染页面 (重绘重排)，响应用户的交互 (优先)
- 耗时性的任务
  - setTimeout/setInterval
  - fetch/ajax
  - eventListener
  - 
- script 脚本
  一个宏任务

- 微任务有哪些？
常见微任务API
  - Promise回调 ： .then() / .catch() / .finally()
  - queueMicrotask() ：直接添加微任务
  - MutationObserver ：DOM变化观察器（浏览器环境）
  - process.nextTick() ：Node环境特有（优先级高于其他微任务）
- 宏任务有哪些？
常见宏任务API
  - 定时器 ： setTimeout() / setInterval()
  - I/O操作 ：文件读写、网络请求（fetch/AJAX）
  - UI渲染 ：浏览器的重排重绘
  - script标签 ：整个脚本的执行（初始宏任务）
  - setImmediate() ：Node环境特有

## 多进程和多线程
- 进程
  独立的进程ID 一定的大型，开销
  程序运行以进程为单位
  - 主进程
    管理子进程 父子关系 并发 并行
  - 进程间通信
    两个独立进程间
  - 主线程
    执行js代码...
- 线程
  干活的

- chrome浏览器是多进程架构
  - 浏览器主进程
  - 一个tab 就是一个渲染进程
    几个tab 几个进程
    安全、一个页面crash 了，别的不受影响
  - 主线程 主角
    js 单线程
    - 简单
    - DOM 编程模型 线程的争抢不可以 安全

  - setTimeout 专属定时器线程 放到event loop中
    宏任务 微任务 任务队列