# 智能前端之语音
- AI时代新的交互体验，语音交互
  虚拟数字人 AIGC 文字 -> 语音

- 敏感信息怎么保护？
  .gitignore 哪些文件不用提交到远程 仓库也不进入
  - node_modules -> 太大了，不要提交到远程仓库
  .env -> 敏感信息
  .env.development -> 开发环境的敏感信息
  .env.production -> 生产环境的敏感信息

- 环境变量
  .env.local 本地环境变量 '.' 开头的文件是本地环境变量

- 单向数据流
  input value {prompt}
  保持数据状态和界面的统一
  UI =  f(state) state 驱动界面
  onChange 修改