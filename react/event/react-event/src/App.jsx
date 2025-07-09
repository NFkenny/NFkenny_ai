import { useState } from 'react'
import './App.css'

function App() {
  // react 不能直接操作DOM，性能差  高速 v8 -> 渲染引擎
  // react 借鉴了DOM 0 行内的写法
  // 相似， react event 不是原生事件，是合成事件
  // onClick 不是 onclick 不是字符串，而是事件函数绑定
  // 
  const handleClick = (e) => {
    // 事件模块是项目，框架的核心部分，react 性能，封装，优化
    // console.log(e) // 合成对象 SyntheticEvent
    // console.log(e.nativeEvent) // 原生对象
    // 事件代理 将事件挂载到 #root + 唯一值 -> 合成事件
    console.log('立即访问',e.type);
    setTimeout(() => {
      console.log('异步访问',e.type);
    }, 2);
    
  }
  return (
    <>
    <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
