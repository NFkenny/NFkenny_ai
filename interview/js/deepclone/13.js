const target = {
  field1: 1,
  field2: undefined,
  field3: 'MRSK',
  field4: {
    child1: 'man',
    child2: {
      name: 'adad',
      age: 18
    }
  }
}
const source = {
  b: 3,
  c: 4
}

function clone(source) {
  if (typeof source === 'object') {
    let cloneTarget = {}; // 分配新空间
    for (const key in source){ // 遍历
      cloneTarget[key] = source[key];
    }
    return cloneTarget;
  }
}
let obj = clone(target);
obj.field4.child1 = 'woman';
console.log(target, obj);
