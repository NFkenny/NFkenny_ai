import {
  useState // 私有状态
} from "react"
const TodoForm = ({onAddTodo}) => {
  // 数据
  // props 参数数据
  // state 私有的数据
  // 单向数据流
  const [text, setText] = useState("") 
  // JSX 一定要有唯一最外层元素 树状来编译解析JSX
  const handleSubmit = (e) => {
    e.preventDefault()
    let result = text.trim()
    if(!result) return; // dry don't repeat yourself
    // 添加数据
    onAddTodo(result)
    // 清空数据
    setText("") // 对数据状态和界面状态的一致性要敏感
  }
  // JSX一定得有唯一的
  return (
    <>
      <h2 className="header">TodoForm</h2>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={text} 
        onChange={(e) => { setText(e.target.value) }} // 维护数据和数据的绑定关系
        placeholder="Please input your todos"
        required // 必填项
        />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}
export default TodoForm