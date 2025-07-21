// 如何遍历数组
// - for (let i=0;i<names.length;i++) 计数循环 可读性不好 电脑
// - while
// - forEach
// - map filter find some every
// - for of 
// - for in
const names = Array.of('Alice','Bob','David','Eva')
// console.log(names);
names.forEach(name => {
  if(name === 'Eva'){
    console.log('I am ' + name);
    return;
  }
  console.log('Processing' + name);
})