// Object.defineProperty
var obj = {}; // 对象
// es5 就提供的api 兼容性更好
// react 和 vue 最新版 对浏览器有要求
Object.defineProperty(obj, 'num', {
  value: 1,
  // 属性描述
  configurable: true,
  writable: false,
  enumerable: false,
  // get: function() {
  //   console.log(`读取了属性`);
  //   return 1
  // },
  set: function(newValue) {
    console.log(`设置了属性${newValue}`);
    this.value = newValue
  }
})
for (let key in obj) {
  console.log(key + ':' + obj[key])
} 

console.log(Object.getOwnPropertyDescriptor(obj, 'num'));
Object.defineProperty(obj, 'name', {
  writable: true,
})
obj.name = 'MRSK'
console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

for (let key in obj) {
  console.log(key + ':' + obj[key])
} 

// obj.num = 2;
// console.log(obj.num);
// delete obj.num
// console.log(obj.num);
