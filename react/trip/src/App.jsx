import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width:'2.66667rem',height:'5rem',background:'red'}}></div>
      <div className='box'></div>
    </>
  )
}

export default App
