# 工程化

- 哪些问题？ 工程一揽子方案
  - web server 5173 端口 http 模块？ express 框架
    - index.html 首页
    - tsx -> jsx -> babel js
    - styl -> css 文件
    ...
    基础，后方工作

- 怎么介绍vite
    <script type="module" src="/src/main.jsx"></script>
    vite 是一个基于原生ES模块 (Webpack，浏览器很多还不支持ESM)
    main.jsx 入口文件，模块的依赖
    main.jsx -> App.jsx -> App.css + react + components + router +api + store
    整理这些模块之间的依赖关系

- 适合大型项目，丰富的配置
  - entry，output 这是核心
  - plugins
      html-webpack-plugin html template 在哪？
  - devServer
      http server 细节
  web bundler 一切静态资源皆可打包
  vite 快，不需要打包，但有兼容性，生态、定制性不如webpack
  webpack 打包，慢一点，但是兼容性好，生态丰富，可为
  大型项目定制，有很长时间的业务验证。