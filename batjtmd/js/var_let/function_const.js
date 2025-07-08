// const myFunction = function() {
//   console.log('Hello World');
// };
// 用 const 声明的函数 叫做函数表达式
// 函数表达式是一种将函数赋值给变量的方式，它可以被重新赋值(var,let)，但是不能被重新声明
// 用 function 的方式叫 函数声明
// 
const f1 = () => {
  console.log("Hello const 1");
};

// f1 = () => {
//   console.log("Hello const 2");
// }; 
/*
  const f1 = () => {
  console.log('Hello const 2');
};
// 报错：Identifier 'f1' has already been declared
*/
function f2() {
  console.log("Hello function 1");
}
// 第二个函数声明会覆盖第一个函数声明
function f2() {
  console.log("Hello function 2");
}
var name = "Alice"
function f3() {
  console.log(this.name);
}
f1();
f2();
f3();
