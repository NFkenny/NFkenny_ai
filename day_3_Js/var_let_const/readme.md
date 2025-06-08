# var_let_const
## JS代码的执行机制
- 有一段代码
  硬盘读入内存
- V8 引擎
  chrome 心脏，负责解析和执行代码
  1. 词法分析 把代码拆成一个个token 词法单元
  2. 语法分析 把token 组成AST 抽象语法树
  3. 生成字节码 （中间码）
- 编译阶段 
  currentVariable{
    showName: '',
    console:''
  }
  - 作用域 变量查找的规则
    全局
    函数
    块级
    - 作 用域链
      变量查找的路径 当前作用域-> 父作用域-> ...->全局作用域

- 变量提升 hoisting
  - 有作用域
  - var 提升变量的申明 undefined
    赋值是在执行阶段做
    函数提升的是函数的定义
    函数表达式 不会提升
    let const 不会提升

  - let 就不可以？