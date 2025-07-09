import { 
  // 响应式状态hooks
  useState,  // react 函数式编程 以 use 开头的钩子函数
  useEffect
} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useTodos } from "@/hooks/useTodos"
const Todos = () => {
  // 数据流管理
  // 父组件持有管理数据 props 传递数据
  // 通知父组件
  const {
    todos,
    addTodo,
    onToggle,
    onDelete
  } = useTodos()
  // 新增todo
  return(
    <div className="app">
      <h1>Todos</h1>
      {/* 自定义事件 */}
      <TodoForm
        onAddTodo={addTodo}
        />
      <TodoList
        todos={todos}
        onToggle = {onToggle}
        onDelete = {onDelete}
      />
    </div>
  )
}
export default Todos