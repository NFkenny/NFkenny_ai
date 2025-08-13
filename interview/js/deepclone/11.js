// const arr = [1,2,3];
// const newArr = [...arr];

// let arr2 = arr.slice(0)

// console.log(newArr);
// console.log(arr2);

const arr3 = [[1,2],[3,4],[5,[6,7]]]
// const arr4 = [...arr3];
const arr4 = arr3.slice();
arr4[2][1][0] = 100;
// arr.slice() 浅拷贝
console.log(arr4);
console.log(arr3);

let arr5 = arr3.concat([11,111]);
arr5[2][1][0] = 1000;
// arr.concat()浅拷贝
console.log(arr5);
console.log(arr3);