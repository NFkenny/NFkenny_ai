import { useState,useEffect } from 'react'
export const useTodos = () => {
  // 状态管理
  const [todos, setTodos] = useState(JSON.parse(
    localStorage.getItem('todos')
  ))
  // 初始化
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addTodo = (todo) => { 
    // setTodo
    // 数据状态是对象的时候
      setTodos([...todos, {
        id: Date.now(),
        text: todo,
        isCompleted: false
      }]) // 展开运算符
  }
  const onToggle = (id) => { 
    // todos 数组找到id 为 id， isComplete !isComplete 
    // 响应式？ 返回一个全新的todos map
    setTodos(todos.map(todo =>
      todo.id === id? {...todo, isCompleted:!todo.isCompleted} : todo // 三元运算符
    ))
  }
  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return {
    todos,
    setTodos,
    addTodo,
    onToggle,
    onDelete
  }
}
