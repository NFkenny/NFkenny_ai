exports.name = "exports";
var obj = {
  name: "obj",
  foo: function () {
    setTimeout(function () {
      console.log(this.name);
      console.log(this.constructor.name); // 输出 'Timeout'
      
      console.log(this === global); // 输出 false
      console.log(this === exports); // 输出 false
      console.log(this === obj);    // 输出 false
    }, 1000);
    setTimeout( () => {
      console.log(this.name);
    }, 1000); // obj
  },
};
obj.foo(); 
console.log(typeof null); 
