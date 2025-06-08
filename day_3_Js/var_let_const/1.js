// 代码
// 编译阶段
//    语法检测 变量查找
// 执行阶段
// 当前作用域顶部
// 变量提升是面试官喜欢的，js开发者设计的
// 不好，代码的执行结果和代码阅读顺序不一致，有歧义
// 糟粕，避开
// 申明变量不用var，用let和const
showName();

var myName = "AAA建材大王";

console.log(myName);

function showName(){
  console.log("函数执行");
}