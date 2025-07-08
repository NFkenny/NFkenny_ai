# react 事件机制
- js 事件机制
  - 异步
  - 监听一个事件
    - addEventListener() DOM 2 事件
    - DOM 0 事件
    <a onclik="dosomthing()"></a>
    - DOM 1?  DOM 版本 没有去做事件升级

  - addEventListener(type,listener,useCapture)
      - 回调函数 callback 异步处理的称呼
      - promise then
      - async await
      监听器
- 注册事件  addEventlistener
- useCapture false 默认值
    先捕获 document -> 一层层去问
      点击了谁？
      先触发父元素
    event.target
        捕获阶段结束，拿到event.target
    冒泡
        event.target 冒泡到 window


- 捕获阶段（Capture Phase） ：事件从window向下传播到目标元素的父级
- 目标阶段（Target Phase） ：事件到达目标元素本身
- 冒泡阶段（Bubble Phase） ：事件从目标元素向上传播回window
示例 ：点击按钮时，事件会先从window→document→body→div→button（捕获），再从button→div→body→document→window（冒泡）



    