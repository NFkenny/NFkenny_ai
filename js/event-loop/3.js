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
console.log('end');
