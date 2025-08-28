async function foo(a) {
  console.log('start:',a);
  
  const b = await bar(a)
  console.log('end:',b);
  
}
function foo(){
  return new Promise((resolve,reject) => {
    bar().then(a=> {
      console.log('end:',b);
    }).catch(reject)
  })
}
// 本质就是语法糖,只是写法更优雅,更同步
