function f1() {
  var n = 111;
  nAdd = function () {
    n += 1 
  }
  function f2() {
    console.log(n);
  }
  return f2;
}
const result = f1();
result(); // 111
nAdd(); // 112
result(); // 112
// 闭包  函数嵌套函数，内部函数可以访问外部函数的局部变量，并且变量还保存在内存中，不会被垃圾回收机制回收，这种特性就叫做闭包