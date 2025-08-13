let obj1 = {
  name: "张三",
  age: 20
}
let obj2 = obj1; // 不是复印, 是引用传递。只是换个名字，还是一个东西
obj2.age = 99;
console.log(obj1, obj2);

let arr1 = [1,2,3]
let arr2 = arr1;
arr2[0] = 100;
arr2.push(4)
console.log(arr1, arr2);
