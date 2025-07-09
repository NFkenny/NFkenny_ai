function CreateCounter(num){
  // 对外的接口
  // 对内的私有
  this.num = num; // 公共属性
  let count = 1; // 私有变量
  return {
    num: num,
    increment: ()=>{
      count++;
    },
    decrement: ()=>{
      count--;
    },
    getCount: ()=>{
      console.log(count);
      return count;
    }
  }
}
// let obj = new CreateCounter(1)
// console.log(obj.num);
// obj.increment()
// console.log(obj.getCount())
const counter = new CreateCounter(1)
console.log(counter.num);
// console.log(counter.count); 不能访问
// 闭包延长了变量的生命周期
// 不直接操作它
counter.increment()
counter.getCount()
