// 让局部变量可以在全局访问
function fn1() {
  //局部变量
  var n = 10;
  function fn2() {
    console.log(n);
  }
  return fn2;
}
const result = fn1();
result();