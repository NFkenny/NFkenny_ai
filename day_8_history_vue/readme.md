# js历史

- const 是 ES6 中新增的关键字，用于声明一个常量。常量的值不能被重新赋值，并且必须在声明时进行初始化。
  简单数据类型 值不可以改变
  对象呢？ 值可以改变，指向的内存地址不能发生改变

- 赋值
  简单数据类型 值传递
  复杂数据类型 地址传递 （引用式赋值）
  const  类型不同处理不同

  内存栈 连续   空间小 快
  内存堆 不连续 空间大 慢
  const 简单数据，复杂数据类型虽然表现不一致，内存栈中的值不会发生改变

es 第一个新特性 let const，弥补了es5 只有 var 的不足，支持块级作用域，支持常量
原因：早期js 用来设计页面交互，简单，es6 要JS 企业级别的大型应用开发语言，和java，c++一样，不再是老破小
  - TDZ 变量提升 代码的阅读和执行的歧义 （可读性）
  - 块级作用域 
    大型语言的需要
    for 等。。。
  - 变量、常量的内存分配
    内存栈 js 执行上下文分配内存的主战场
    连续，快
    内存堆 不连续，慢
  - 简单数据类型 const值不可修改
    复杂数据类型 地址不可修改，值可以修改
    内存栈值都没有改变
    值传递
    引用式赋值
    - var 在前端 申明的变量会挂在window上
    let const 不会
    不合理的， 会污染全局变量