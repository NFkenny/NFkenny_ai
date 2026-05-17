// exec 执行命令的tool
import {
  spawn,
// node 内置模块 执行命令
// 很高级 可以创建一个子进程 
// 分配资源的最小单位
// 线程 是执行的最小单位
// 主进程 node node-exec.mjs
// 执行npm i  npm run dev  npm init vite
// cmd 本身就是进程 不能阻塞主进程
// node 是多进程架构
// 父进程 mini-cursor 启动 子进程
} from 'node:child_process';
// bash 命令
// git bash
const command = 'ls -la'
// 新建一个子进程
const [cmd, ...args] = command.split(' ')
const cwd = process.cwd()
console.log(`当前工作目录: ${cwd}`)
// 并发
const child = spawn(cmd, args, {
  cwd,
  // 继承父进程的标准输入输出流 stdin stdout stderr
  stdio: 'inherit',
  // shell 执行命令
  shell: true
})

child.on('close', (code) => {
  if (code === 0 ) {
    // 成功退出
    console.log('执行命令成功,子进程退出')
    process.exit(0)
  } else {
    if (errorMsg) {
      console.error(`执行命令失败: ${errorMsg}`)
    }
    process.exit(code || 1)
  }
})