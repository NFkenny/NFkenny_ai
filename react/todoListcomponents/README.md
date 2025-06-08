## React 组件化

- 何为 vite ？
npm 包管理
    vite 工程化套件 塔吊、搅拌机...
    - 大型项目
    - 模板代码
    - 跑起来

- 何为组件
    组合了html，css，js 的开发单元
    App.jsx 根组件
    - 标签粒度太细，只是工作的一个环节，不利于表达业务单元的抽象
    - TodoList 组件
    - 工作单位
    - 功能单位

- 组件如何划分 TodoList为例
- 函数就是组件
    - return html 完成了模板 { 数据 }
    - return 之前 js 逻辑 数据
    - 复用
    - 以html标签的形式，插入

## 开发目录
    - todoListComponent 
    - src 开发目录
        - App.jsx 根组件
        - 组件放到components 目录下
        - css 放在src 
        - js 放在src
        - 图片放在src
        - 其他文件放在src
        - 静态文件放在public 目录下

## 模块化
    - 大型多人协作的项目
    - 模块化文件分离
        - 函数
        - 类
        - 文件分离 一个文件一个模块 (类，函数，组件)
        - import XXX from '../components/XXX'
        - export default XXX

## 组件化思想
- 现代前端开发框架的核心思想
- 低级的DOM树编程 -> 组件树编程
- 开发的最小单元
    html 只是沙子
    css 只是衣服
    组件才是一个完整的开发单元，任务单元
- 组件是组合一堆的html，css，js 实现一个组合功能
    方便复用
- 组件组合在一起，完成页面开发
    页面由组件构成，现代前端其实就是用组件搭乐高积木
- 写组件、拆分组件、写数据状态业务 -> 写前端项目

## React 界面开发业务
- 现代界面业务的构成
    - html模板
    - 数据驱动 {模板区域 数据绑定业务}
    - 数据状态的改变 useState
    - 显示和更新 由数据状态决定 不需要做什么
    - react 聚焦于业务 而不是DOM API
    - 什么数据？ todos
    - 在哪里用？ {  }
    - 合格的前端