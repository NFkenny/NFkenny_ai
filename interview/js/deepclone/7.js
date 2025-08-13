// 怎么用的 参数的默认值
// 默认值，用户传的， Object.assign 收入囊中
// 目标对象是{}空对象 合并用户传参和默认参数
// Option 是会传入的对象
function createUser(options){
  const defaults = {
    name: 'user',
    age: '18',
    isAdmin: 'false'
  }
  const config = Object.assign({}, defaults, options);
  console.log(config);
  return config;
}

const user = createUser({
  name: 'admin',
  age: '20',
})
const baseConfig = { api: '/api', timeout: 500};
const envConfig = { timeout: 10000, debug: true};
const finalConfig = Object.assign({}, baseConfig, envConfig);
console.log(baseConfig);
console.log(envConfig);
console.log(finalConfig);

