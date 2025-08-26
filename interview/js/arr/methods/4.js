let str = 'app-hello-aaa'
const arr = str.split('-');
console.log(arr);

const newArr = arr.map((item,index) => {
  if(index === 0) return item
  return item.charAt(0).toUpperCase() + item.slice(1)
})
console.log(newArr);

// console.log(newArr.join(''));
const result = newArr.reduce((pre,curr) => pre + '1' + curr + '2','!');
console.log(result);
