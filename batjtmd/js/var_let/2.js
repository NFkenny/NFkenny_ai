exports.name = 'exports';
const obj = {
  name: 'Object',
  traditionalFunction: function() {
    console.log(this.name); // 'Object'
  },
  arrowFunction: () => {
    console.log(this.name); // undefined，箭头函数的 this 绑定到定义时的上下文
  }
};

obj.traditionalFunction(); // 输出 'Object'
obj.arrowFunction(); // 输出 undefined
console.log(typeof(this.name));
console.log(this === module.exports); // true（证明this指向模块导出对象）
console.log(this === exports); // true
console.log(this === global); // flase 
