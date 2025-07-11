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