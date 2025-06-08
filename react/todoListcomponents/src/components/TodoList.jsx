// 内置的hook函数
import React, { useState } from 'react'
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList() {
  // 数据驱动的界面
  // 静态页面
  // DOM 数组 -> map -> join('') -> innerHTML 底层API 编程
  // 缺点：低效、面向API 
  // 面向业务 懂业务 
  // 数据 -> 变化 -> 数据状态 -> 自动刷新页面 -> 数据驱动页面
  // 数组 第一项是数据变量，第二项是数据更新函数，并传入新的todos
  // 页面会自动更新
  // 挂载点 tbody
  // {todos.map}
  // setTodos DOM 及动态更新
  // 响应式界面开发
  // hi 数据状态 setHi 修改数据状态的方法
  // es6 解构赋值
  const [hi, setHi] = useState('kenny今天要做什么呢');
  const [title, setTitle] = useState('Todo list ');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '学习',
      completed: false,
    }
  ])
  const handleToggleComplete = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };
  const handleAdd = (text) => { // 函数组件 没有this
    setTodos([
      ...todos, 
      {
        id:todos.length + 1,
        text,
        completed: false
      }
    ])
  }
  // setTimeout(() => {
  //   setTodos([
  //     {
  //       id: 2,
  //       text: '睡觉',
  //       completed: false,
  //     }
  //   ])
  //   setTitle('Todo list 2')
  //   setHi('Hello World 2')
  // }, 5000)
  return(
    <div className='container'>
      <h1 className='title'>{ title }</h1>
      <p>{ hi }</p>
      { /* 表单 */ }
      <TodoForm onAdd={handleAdd} />
      { /* 列表 */ }
      <Todos todos={todos} />
      { 
        // 当下这个位置
        // 数据为王 界面是被驱动的
        // 数据驱动
        // 数据绑定
        todos.map(todo => (
          <li 
            key={todo.id}
            data-status={todo.completed ? "已完成" : "未完成"}
            onClick={() => handleToggleComplete(todo.id)}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
          </li>
        ))
        
      }
    </div>
  )
}
export default TodoList;