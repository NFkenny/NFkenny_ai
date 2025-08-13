const target = {
  a: 1
}
const source = {
  b: {
    name: 'AAA建材大王',
    hobbies: ['吃','喝']
  },
  c: 1
}
// 浅拷贝
Object.assign(target, source);
target.b.name = '小红'
target.b.hobbies.push('画画')
target.c = 2;
console.log('target',target);

console.log(source.b.name, source.b.hobbies);
