const str = '我的手机号是13888889999,打给我。'
const str2 = '1adawda138512315n86wdadafh12aw'
const reg = /1[3-9][0-9]{9}/; 
console.log(reg.test(str));
console.log(reg.test(str2));
console.log(str.match(reg));

const str3 = '我的{name}';
console.log(str3.replace(/\{name\}/,'奶龙'));
