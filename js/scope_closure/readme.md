# JS 执行机制

- 调用栈
    记录函数的执行顺序，管理执行上下文和变量环境

- 作用域
    变量查找的规则
    当前作用域 -> 父作用域 -> 全局作用域

- 作用域链
    变量查找的路径

- 执行上下文
    函数执行时，创建一个执行上下文

- 变量环境
    变量提升
    函数声明提升

- 词法环境
    TDZ 暂时性死区

- 词法作用域
在每个执行上下文的变量环境中，都包含了一个外部应用outer，用来指向外部的执行上下文
## 作用域链
- 一段代码使用一个变量时，JS引擎首先会在当前作用域中查找变量，找不到就往外找，直到找到或者找不到为止
- 沿着outer 指向的外部作用域去查找--到全局
查找的路径就是作用域链

## 词法作用域
作用域由代码中函数申明的位置来决定，是静态的
预测代码在执行过程中如何查找变量 

词法作用域是代码编译阶段就决定好了的，和函数怎么调用没有关系
