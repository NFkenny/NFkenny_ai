# 微信当家框架WEUI

## BEM 国际命名规范
- block 块
- element 元素
- modifier 修饰符

- 项目 .weui-page
  - 任务： button 页面

- Block 概念
  - 一块内容 项目代号 风格 + 可复用的代码
    项目代号 + 区块的作用或指责 page
    .weui-page
    .tm-page

- Element 概念
  - 元素 __ header
    区块的组成部分  区块的子元素
    区块名 + 元素名  __header
  同一块中概念不重叠
  .weui-page__title
  .weui-page__desc
  .weui-page__footer
- UI **框架**中 button input cell 通用的组件
  重启BEM 命名
  .weui-btn **复用**
  业务代码 大厂
  基础架构代码 学习 WEUI 的源码

  几个block组合起来 页面就出来 组件式开发

- Modifier 概念
  - 修饰符 状态
    元素的状态  元素的特殊状态
    元素名 + 状态名  _primary
  .weui-btn_primary  主要
  .weui-btn_default  次要

- BEM 规范让我们一起大厂协作
  - 页面由几个block组合  .weui-{block}
  - 每个block由几个element组成  .weui-{block}__{element}
  - 每个element由几个modifier组成  .weui-{block}__{element}_{modifier}