import { useState } from 'react'
import Todos from './components/Todos/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* 开发的任务就是组件 */}
      <Todos />
    </div>
    
  )
}

export default App
