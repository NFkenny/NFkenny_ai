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
          事件在它在冒泡阶段执行
          在哪个阶段执行

- 捕获阶段（Capture Phase） ：事件从window向下传播到目标元素的父级
- 目标阶段（Target Phase） ：事件到达目标元素本身
- 冒泡阶段（Bubble Phase） ：事件从目标元素向上传播回window
示例 ：点击按钮时，事件会先从window→document→body→div→button（捕获），再从button→div→body→document→window（冒泡）

## 事件委托优势 delegation
- 性能优化
    - 极致的将事件委托给最外层元素
    react 是用于大型项目开发的，性能优化是react的焦点
    事件委托可以减少事件监听器的数量，从而提高性能。
    给我们的事件节点 event.target 添加一个唯一属性
- 动态节点的事件 
    - 滚动到底部，一次新增一堆的新元素
    事件委托可以有效解决动态节点的事件问题 
- 同一元素同一事件可以注册多次
    - dom节点
    - event type
    - 监听器 (回调函数) event loop
        event 对象
    - useCapture 
    - event.preventDefault 阻止默认行为
      form submit
    - event.stopPropagation 阻止冒泡
- 用户交互的便利体验问题
    - toggle按钮
    - 点击页面任何地方可以关闭 方便 stopPropagation
    - 显示区域可以交互 
- SyntheticEvent 合成事件
    - 委托 #root
        性能优化框架帮我们做
    - 事件池 Event Pooling
        事件对象的回收利用
        大型密集交互的应用
    - 最近的版本中又可以使用事件对象了

    