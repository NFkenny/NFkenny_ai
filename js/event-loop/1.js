console.log('同步开始');

setTimeout(() => {
  console.log('宏任务1');
  Promise.resolve().then(() => console.log('宏任务1中的微任务'));
}, 0);

Promise.resolve().then(() => {
  console.log('微任务1');
  setTimeout(() => console.log('微任务1中的宏任务'), 0);
});

Promise.resolve().then(() => console.log('微任务2'));

setTimeout(() => {
  console.log('宏任务2');
  Promise.resolve().then(() => console.log('宏任务2中的微任务'));
}, 0);

console.log('同步结束');

//  同步开始 →
//  同步结束 →
//  微任务1 →
//  微任务2 →
//  宏任务1 →
//  宏任务1中的微任务 →
//  宏任务2 →
//  宏任务2中的微任务 →
//  微任务1中的宏任务