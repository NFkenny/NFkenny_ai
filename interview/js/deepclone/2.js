const target = {
  a: 1,
  b: 2 
}
const source = {
  b: 3,
  c: 4
}
Object.assign(target, source);
console.log(target,source);
source.c = 11;
console.log(target,source);
target.c = 33;
console.log(target,source);
