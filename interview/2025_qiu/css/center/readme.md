# 居中
- 是什么布局
  - 垂直居中
  - 水平垂直
- 方法不是关键，区别和优劣
  - 水平居中 text-align
  - 单行文本垂直居中 line-height = height padding
  - 固定宽高块级盒子水平垂直居中 
      缺点需要知道盒子宽高
      1. absolute + margin 负值
      2. absolute + margin auto (重要)
      3. absolute + calc (css calc 计算函数) 缺点是性能差，很少用
  - 不固定宽高块级盒子水平垂直居中
      1. absolute + transform
      2. line-height + vertical-align
      3. writing-mode
      4. table-cell
      5. flex
      6. grid

  - transform 相对自身大小的百分比: translate(-50%, -50%); 

