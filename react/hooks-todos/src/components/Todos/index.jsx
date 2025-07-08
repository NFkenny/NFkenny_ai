import { 
  // 响应式状态hooks
  useState  // react 函数式编程 以 use 开头的钩子函数
} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const Todos = () => {

  // 数据流管理
  // 父组件持有管理数据 props 传递数据
  // 通知父组件
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "学习react",
      iscompleted: false,
    },
    {
      id: 2,
      title: "学习vue",
      iscompleted: false,
    },
    {
      id: 3,
      title: "学习node",
      iscompleted: false,
    }
  ])
  // 新增todo
  const addTodo = (todo) => { 
    setTodos([...todos, todo]) // 展开运算符

  }
  return(
    <div className="app">
      <h1>Todos</h1>
      {/* 自定义事件 */}
      <TodoForm
        onAddTodo={addTodo}
        />
      <TodoList
        todos={todos}
        
      />
    </div>
  )
}
export default Todos