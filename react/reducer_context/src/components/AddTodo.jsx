import {useState} from 'react'
import { useTodoContext } from '../hooks/useTodoContext'

const AddTodo = ()=>{
  const [text,setText] = useState('')
  const {addTodo} = useTodoContext()
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(text.trim()){
      addTodo(text.trim())
      setText('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a todo"
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
export default AddTodo