console.log('Start');
// node 微任务
// process 进程对象
process.nextTick(()=>{
  console.log('Process Next Tick');
  
})
// 
setTimeout(()=>{
  console.log('Macrotasks');
},0)
// 微任务
Promise.resolve().then(()=>{
  console.log('Promise Resolved');
})
queueMicrotask(()=>{
  // DOM 更新了，但不是渲染完了
  // 一个元素的属性 
  console.log('微任务: queueMicrotask');
})
console.log('end');
