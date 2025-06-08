
// 申明了对象常量
// 在内存中申请空间，存放对象
// AAA建材大王 取址
// js弱类型语言 
// 灵活，不需要new，通过{}拿到对象，[]拿到数组

const AAA建材大王 = Object.freeze({
    name: '侠哥',
    sex: '男',
    age: 20,
    tall: 175,
    city: '广丰',
    isSingle: true,
    sendFlower:function(girl){
      console.log(`${AAA建材大王.name}给${girl.name}送了99朵玫瑰`)
      girl.receiveFlower(AAA建材大王) // 调用了girl对象的receiveFlower
    }
  });
const girl = {
    xq: 40,
    name: '不吃香菜',
    room: '405',
    sex: '女',
    age: 18,
    tall: 165,
    city: '抚州',
    isSingle: true,
    receiveFlower:function(sender){
      console.log(`${girl.name}收到了${sender.name}的99朵玫瑰`)
      if(girl.xq > 90){
        console.log("万象走一步")
      }
    }
  };
  const girl1 = {
    xq: 30,
    name: '小美',
    room: '405',
    city: '抚州',
    receiveFlower:function(sender){
      // if(sender.name==='侠哥'){
      //   console.log('我喜欢你');
      // }
      // girl.receiveFlower(sender);
      setTimeout(()=>{
        girl.xq = 99;
        girl.receiveFlower(sender)
      },3000)
    }
  }

