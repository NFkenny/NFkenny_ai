/**
 * @function 反转字符串
 * @param {string} str
 * @returns string
 */
// 函数表达式
// es5 函数表达式
// function reverseString(str) {
//     return str.split('').reverse().join('');
//     // str简单类型 为什么可以引用方法？
// }
// es6 箭头函数 
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('hello im')); // "olleh"

const str = 'hello';
console.log(typeof str); // "string" 
console.log(str instanceof String); // false

const strObj = new String('hello');
console.log(typeof strObj); // "object"
console.log(strObj instanceof String); // true