const arr = new Array(5)
// console.log(arr[0]); undefined
console.log(arr.hasOwnProperty(0));

const obj1 = {
  name:'立军',
  age:18
}
const obj2 = {
  skill:'js'
}
obj1.__proto__ = obj2
console.log(obj1.skill); // js
// in 运算符会检查对象原型链上的属性
for (const key in obj1) {
  console.log(key,obj1[key]);
}
// hasOwnProperty 方法只对对象的直接属性返回true，对于继承的属性则返回false。
// true false
console.log(obj1.hasOwnProperty('name'),obj1.hasOwnProperty('skill'));