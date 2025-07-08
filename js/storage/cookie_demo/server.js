// node 内置的核心模块
// js 在命令行运行
// js 有两种模块化方案
// require node 早期模块化commonJS
// import es6 更先进的模块化方案
// old module
// node 受欢迎 中小型项目开发
// 端口 -> 某个服务
// 3306 mysql 服务 
// 1234 8080 端口占用了 进程(资源) 线程(执行)
// domain(localhost) -> ip地址(127.0.0.1) -> 某台设备 ->port 设备上的服务(进程)
// 一台设备上可以很多端口使用,有多个http服务 多个网站
// 不要使用一些特殊端口
// node 默认不支持es6 模块化
// node 最新版本支持了 22
// node 准备跟 require commonJS say goodbye 了
// es6 module 更先进 mjs

const http = require("http");
const fs = require("fs"); // file system 文件系统
const path = require("path"); // path 路径模块
const { ok } = require("assert");
const server = http.createServer((req, res) => {
  // res.end('hello http server');
  // http 是基于请求响应的协议
  // 路由 Method + url(universal resource locator) 定位了服务器端的资源
  // 为了资源
  if (req.method === "GET" && (req.url === "/" || req.url === "/index.html")) {
    // 首页
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      // 异步 callback
      (err, content) => {
        // 前端体验为主 后端稳定为主
        if (err) {
          res.writeHead(500); // 5xx 服务器错误
          res.end("Server Error"); // 发送错误信息
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" }); // 2xx 成功
        res.end(content); // 发送文件内容
      });
  }
  // 后端路由，暴露资源
  if(req.method === "GET" && req.url === "/style.css") {
    fs.readFile(
      path.join(__dirname, "public", "style.css"),
      (err, content) => {
        if (err) {
          res.writeHead(500); // 5xx 服务器错误
          res.end("Server Error"); // 发送错误信息
          return;
        }
        res.writeHead(200, { "Content-Type": "text/css" }); // 2xx 成功
        res.end(content); // 发送文件内容
      }
    );
    return;
  }
  if(req.method === "GET" && req.url === "/script.js") {
    fs.readFile(
      path.join(__dirname, "public", "script.js"),
      (err, content) => {
        if (err) {
          res.writeHead(500); // 5xx 服务器错误
          res.end("Server Error"); // 发送错误信息
          return;
        }
        res.writeHead(200, { "Content-Type": "text/javascript" }); // 2xx 成功
        res.end(content); // 发送文件内容
      }
    );
    return;
  }
  if(req.method === "POST" && req.url === "/login") {
    res.writeHead(200, {
      "Set-Cookie": "user=admin;",
      "Content-Type": "application/json;",
      }); // 2xx 成功
    res.end(
      JSON.stringify({
        success: true, // 成功标志 约定大于配置 约定优于配置
        message: "登录成功",
        data: { user: "admin" },
      })
    );
  }
  if (req.method == 'GET' && req.url == '/check-login') {
    if (req.headers.cookie) {
      res.writeHead(200, {
        'Content-Type': 'application/json;'
      })
      res.end(
        JSON.stringify({
          loggedIn: true,
          username: 'admin'
      }));
    } else {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        loggedIn: false,
        username: ''
      }));
    }
  }
});
server.listen(8080);
