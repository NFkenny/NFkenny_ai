# 响应式底层原理

- DOM Api -> 响应式业务 自动化
- Object.defineProperty(obj, 'value', {
    get,
    set,
})
    对象上的某个属性的某些行为 (get, set) 进行定义, 在完成本来的职责同时，去做dom 更新
    这就是响应式
    拦截行为
- 缺点呢？ 有点麻烦，每次只能定义一个属性
- obj.value


- es6 Proxy 可以一次性代理整个对象，代理的行为更多

- 属性描述符 (property descriptor)