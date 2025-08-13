# webworkers

- html5 的特性
- js 在做复杂、耗费计算性能、时间等任务时，开启多线程。
    浏览器端跑大模型
- js 是"脆皮的" 单线程
    不太适合计算
    Web 
- 端模型是一个趋势
    电脑、浏览器、手机、内部植入(下载)大模型

- api
    new Worker('./worker.js');
    postMessage
    onmessage

- 复杂任务实例 图片压缩
    JS 不擅长，计算
    Worker 线程 不影响主线程

