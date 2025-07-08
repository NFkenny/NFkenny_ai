var o = {
  m: function () {
    console.log(this); //{} 当函数被作为对象的方法（对象的一个属性）运行时,this指向该对象
  },
  n: function () {
    console.log(this); //{}

    var that = this;
    //如果想访问这个外部函数的this值，需要将this的值保存在一个变量里，内部函数就可以通过作用域链找到这个变量。

    function test() {
      console.log(this); //window
      console.log(that); //{}
    }
    return test(); //函数test独立调用（不论这个函数在哪调用），this默认指向到window
  },
};
o.m(); // {}
o.n(); //全局 window
