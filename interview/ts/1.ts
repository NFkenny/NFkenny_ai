// let a: any = 1; // any 任何类型，适合新手
// a = "1" // 不能滥用，学会用泛型
// function getFirstElement(arr: any[]): any {
//     return arr[0]
// }
// // 复用性，函数参数
// const numbers = [1,2,3];
// const firstNumber = getFirstElement(numbers);
// console.log(firstNumber)

// const strs = ['a','b','c'];
// const firstStr = getFirstElement(strs);
// console.log(firstStr)

// 复用这个函数的同时，传入类型参数

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0? arr[0] : undefined;
}
const numbers = [1,2,3];
const firstNumber = getFirstElement<number>(numbers);
firstNumber?.toFixed(2);
console.log(firstNumber)