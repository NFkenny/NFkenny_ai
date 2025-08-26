const arr = [1,2,3,4,5];
// const removed = arr.splice(-1,1);
// console.log(removed);
// console.log(arr);
// 如果不修改呢？移除但不改变原数组 splice 不能用
// slice 不修改数组，截取部分
const newArr = arr.slice(0,2).concat(arr.slice(3));
// console.log()
console.log(newArr, arr);

