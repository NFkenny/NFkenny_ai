## hooks todos

- 安排一个css 亮点
  - stylus 
    css 超集
  - 拥有 vite 脚手架
      stylus 预编译 安装stylus vite 直接编译
      vite 来自 vue 社区
- react 组件设计
  - 开发任务单元
  - 设计组件
      界面功能  状态 响应式
      - 新建todo 表单 
      - 修改 列表
      - 删除 
  - 按功能划分 颗粒度
      - form
      - list
        - Item 组件 维护和性能 **性能优化**
- 字体
  - 设置多个，设备的支持(本地包含) 
  - 苹果设备 -apple-system 前端负责用户体验，字体也是体验的一部分
- rem
  - 相对单位
  - 移动端的重要单位 px 不要用了 绝对的
    移动端 宽高不定的 rem ( html font-size ) vw/vh(viewport), 相对单位
    使用相对单位，可以在所以设备上适配
    em 相对于自身的font-size 等比例

- props  组件通信
    - 传递的状态
    - 传递自定义事件
    - 直接解构
        const {
          todos, // 任务
          onAddTodo // 添加
        } = props 单独解构
- 数据绑定
    - 变量 修改值
    - 数据状态
      - Data binding **数据**绑定 jsx就是静态的
      {} 数据绑定 
      - 数据和界面状态的统一
        - 界面是由数据驱动的
        - 维持数据和界面状态的一致性
      - 响应式的
- vue 和 react 区别
    - vue 好入门，api好用
    - react 倾向于原生JS  入门难
      - hooks ？
    - <input v-model="text" /> vue的双向绑定
    - <input value={text} onChange={(e) =>{ setText(e.target.value)} /> 
    react的单向绑定

  - BOM  Browser Object Model 浏览器对象模型
  - DOM  Document Object Model 文档对象模型
- 本地存储
  - localStorage html
      key:value 存储
      setItem(key,value)
      getItem(key)
      removeItem(key)
  - localStorage 和 cookie 有什么不同
  - http 无状态，head cookie 带上
  - cookie 太大，影响http性能 性能 4KB
  - cookie 前端，后端都可以设置
      过期时间
      domain
      5MB
  - localStorage 只在浏览器端有效
      todos
      5MB
  - IndexDB 浏览器数据库 GB

## 自定义hooks
  - 自己定义的
  - use
  - 某一项功能
      简单函数的封装
      响应式的状态
      effect 
      todos
- 自定义hooks
  - 现代react app 的架构一部分
  - hooks目录
      自定义hooks
      框架common部分
      业务定制 a hooks
  - use 开头
      state，effect 逻辑封装复用
  - return
      todos
      toggle
      addTodos
      deleteTodos
      函数式编程思想的体现
  - 组件更好地聚焦于模板渲染
  - 全面hooks函数式编程

- 两个遗憾
  - ../../ 
      vite 配置 alias 端路径