# react 旅游 APP
README.md 很重要 它可以方便面试官了解你的项目
- 移动App
- 模仿 APP
  - 喜欢的、国外的
  - 有点改变
- 绝大多数的考点
  - 都适用于任何App

## 技术栈
- React全家桶
    React组件开发
    组件的封装
    第三方组件库
    受控和非受控组件
    hooks编程 自定义hooks
    React-Router-DOM
      SPA
      路由守护
      懒加载
    Zustand
- mock 接口模拟
- axios 请求拦截和代理
- jwt 登录
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo ...
- css 预处理器 stylus
    flex transition transform...
- LLM
  - chat
  - 生图
  - 语言
  - coze 工作流 调用
  - 流式输出
- 移动端适配
    rem vm vh
- 单例模式 设计模式的理解
- git 提交等编程风格

## 项目的架构
- components
- pages
- store
- hooks
- api
- mock

## 开发前的准备
- 安装的包
    react-router-dom zustand axios
    react-vant(UI组件库) lib-flexible (移动端适配)
    开发期间的依赖
    vite-plugin-mock  jwt 
- vite 配置
  - alias
  - mock
  - .env.local
  - llm api key
  - user-scalable=no
  - css 预处理
      index.css reset
      box-sizing font-family: -apple-system
      App.css 全局通用样式
      .module.css 模块化样式
  - 移动端适配 rem
      不能用px，使用相对单位 rem vh vw
      不同设备上体验要一致
      不同尺寸手机要 等比例缩放
      设计师设计稿 750px iPhone 4 375pt * 2 = 750
      小米
      css 一行代码 手机并不同尺寸 html font-size 等比例 
      layout
      flexible.js 阿里 在任何设备上
      1rem = 屏幕宽度/10
- lib-flexible
    阿里开源的移动端适配库
    设置html fontsize = window.innerWidth/10
    css px 宽度 = 手机设备宽度 = 375
    1px = 2 发光源
    750px*1335px 设计稿

- 设计稿上一个盒子的大小？
  - 1像素不差的还原设计稿
  - 设计稿中像素单位
  - /75

## 项目亮点
- 移动端适配
  - lib-flexible 1 rem = 屏幕宽度/10
  - 设计稿 尺寸是iPhone 标准尺寸 750px
  - 前端的职责是还原设计稿
  - 频繁的单位 260/75 换算
  - 自动化？
      postcss + postcss-pxtorem 自动将px转换为rem
# git 提交规范
