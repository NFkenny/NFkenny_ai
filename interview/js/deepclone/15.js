let obj = {a:1,b:2};
// 太常用了，大型语音都内置的，[] {}
// HashMap 字典 0 (1)
const target = new Map(); // 实例化es6 新的数据结构
target.set('c', 3);
console.log(target.get('c'));
target.set(obj, 4);// 和 JSON 不一样的地方 对象做key
console.log(target.get(obj));
obj = null;
console.log(target.get(obj));

// let obj2 = {name :'mrsk'};
// const target2 = new WeakMap();
// target2.set(obj2, '小呆瓜');
// console.log(target2.get(obj2));
