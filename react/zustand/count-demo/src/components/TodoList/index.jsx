import {
  useTodoStore
} from '../../store/todos'
import { useState } from 'react'
const TodoList = ()=>{
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  } = useTodoStore()
  const {newTodos,setNewTodos} = useState('')
  const handleChange = (e) => {
    setNewTodos(e.target.value)
  }
  return(
    <div> 
      <h1>TodoList</h1>
      <div className="todo-input-container">
        <input
        type="text"
        placeholder="添加新任务"
        value={newTodos}
        onChange={handleChange}
        />
        <button onClick={() => addTodo(newTodos)}>添加</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>

    </div>
  )
}
export default TodoList