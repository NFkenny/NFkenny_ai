# 性能优化

## 重绘重排

- 重绘
    当元素样式改变但是不会影响到布局，浏览器重新绘制元素的过程。 如：颜色、背景颜色、可见性等
- 重排
    元素的几何信息发生改变，会导致浏览器重新计算布局。 如：元素的宽度、高度、位置等
  重排一定会触发重绘(性能开销更大)，重绘不一定会触发重排。

### DEMO 1 批量修改DOM
```js
// 不对 多次操作可能触发多次重排重绘
// 虽然现代浏览器会批量合并修改，优化
// 但是可以避免
const el = document.getElementById('myEl')
el.style.width = "100px"
el.style.height = "100px"
el.style.margin = "10px"
// good
el.style.cssText = 'width: 100px; height: 100px; margin: 10px'; // 一次修改
el.className = 'my-class' // 用类名而不是一堆js代码
```

### 使用文档碎片
```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  fragment.appendChild(div); // 不会触发重排重绘
}
document.body.appendChild(fragment);
// 批量添加元素时，使用document.createDocumentFragment()创建文档碎片，
// 然后一次性添加到文档中，避免多次重排重绘。
```

## 脱离文档流进行操作 下线
```js
const el = document.getElementById('myEl')
el.style.position = 'absolute'
el.style.display = 'none'
...进行大量DOM 操作
el.style.position = 'static'
el.style.display = 'block'
```

### 缓存布局信息
```js
// offsetTop 读取，但是每次都会触发重排以获得盒子的布局信息
for (let i = 0; i < 1000; i++) {
  el.style.top = el.offsetTop + 1 + 'px'
}

let top = el.offsetTop; //缓存布局信息
el.style.top = top + 100 + 'px' // 一次修改
// 缓存布局信息后，再进行修改，避免多次触发重排


```

### 使用transform 代替位置调整
```js
el.style.left = '100px';
// 只触发重绘，性能更好。
el.style.transform = 'translateX(100px)'
```

## 资源加载优化
  - 图片懒加载
  - 路由懒加载
      代码文件上，code spliting 代码分割
  - 资源预加载
      未来可能会用到的资源
      <link rel='prefetch' href='https://www.baidu.com' />
      <link rel='preload' href='https://www.baidu.com' as='font' />
      dns-prefetch dns 预解析
      preload 当前页面必须资源，立即加载
      prefetch 未来可能会用到的资源，浏览器空闲时加载
  - script 资源的加载 阻塞的
      默认没有
      async 并发
      defer
      module //功能
  - webp 格式图片
      图片的优化，显著的减少体积，质量不受影响 
  - 图标字体库
  减少http请求数

## JS执行优化
  - 防抖节流
  - web workers 处理复杂计算
  - requestAnimationFrame 动画优化
  - requestIdleCallback react fiber 机制
      schedule 机制

## 框架层优化
  - memo，useMemo，useCallback 避免不必要的渲染
  - shadcn-ui 按需加载组件库
  - 合理运用key 优化列表渲染

## 缓存策略
  - 强缓存和协商缓存
      Expires (客户端时间不准确) / Cache-Control
      LastModified if-modified-since 时间戳
      ETag if-none-match 校验和
  - localStorage/sessionStorage/cookie
## 网络优化
  - CDN加速
      静态资源，分流，会缓存文件
      多路复用 多域名服务器 img1.baidu.com img.baidu.com 
  - Gzip 压缩
  - HTTP/2 多路复用
  - DNS 预解析

## 首屏优化
  - SSR
      组件渲染在服务器端已经完成编译、执行，浏览器端直接显示
  - 骨架屏
      骨架屏是在页面加载时，先展示一个简单的结构，等数据加载完成后再替换为真实的内容。
      骨架屏可以提高用户体验，避免白屏时间过长。
  - http 2.0 server push 首屏数据推送

## 性能测试
  - chrome 的performance 面板
  可以看到各项性能指标
  - 减少首屏JS/css 体积 (code spliting)
  代码分割(Code Splitting) 是一种将代码库拆分成更小、更易管理的块的技术，以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
  -  使用transform代替位置调整，预加载相关资源
  juejin js = vue + vue-router + App.vue + Home.vue + Components
  vue + vue-router 单独拆分 缓存 基本上不好改变的
  App.vue + home.vue + Components 业务代码 
  经常改，单独做了一次升级

- lighthouse 
    是chrome 的一款性能打分插件，会在 性能、无障碍、最佳做法、SEO 四个方面打分
    并给出问题和优化建议，非常细致。
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint
    首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
- LCP Largest Contentful Paint
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。
    