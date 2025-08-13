let arr1 = [
  {
    name: 'MRSK',
    hobbies: 'play'
  },
  function(){
    console.log('hello world');
  }
]
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].name = 'KENNY'
arr2[0].hobbies = 'sing'
console.log(arr1, arr2);
