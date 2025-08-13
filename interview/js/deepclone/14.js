const target = {
  field1: 1,
  field2: undefined,
  field3: 'MRSK',
  field4: {
    child1: 'man',
    child2: {
      name: 'adad',
    }
  },
  filed5: [2,4,8]
}
// target.target = target;
// es6 的新数据类型hash Map
function clone(target, map = new Map()) {
  if(typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  }else{
    return target;
  }
}

clone(target);
console.log(target);

