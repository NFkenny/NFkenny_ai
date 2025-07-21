import { useState } from 'react'
import './App.css'
import { createElement } from 'react'

function App() {
  const element = <h1 className='title'>Hello React</h1>
  const element2 = createElement('h1',{className:'title',id:'tit'},'Hello JSX')
  const [todos,setTodos] = useState([
    {
      id: 1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    }
  ])
  return (
    <>
    <ul>
      {
        todos.map((todo)=>(
          <li key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
    
    <ul>
      {
        todos.map((todo)=>(
          createElement('li',{key:todo.id},todo.title)
        ))
      }
    </ul>
      {element}
      {element2}
    </>
  )
}

export default App
