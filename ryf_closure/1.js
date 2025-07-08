// 作用域
// 作用域链 内部可以访问外部，外部无法访问内部
// 函数外部无法访问函数内的局部变量
// 全局作用域
var n = 10;
function fn() {
  // 函数作用域
  b = 44;
  {
    // 块级作用域
    var n = 20;
  }
  console.log(n);
}
fn(); // 20
console.log(n);
console.log(b);