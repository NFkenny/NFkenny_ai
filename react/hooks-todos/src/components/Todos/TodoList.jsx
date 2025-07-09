import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const {todos,onToggle,onDelete} = props 
  return (
    <div className="todo-list">
      {/* TodoList */}
      {todos.length > 0? todos.map((todos)=> {
        return (
          <TodoItem 
          key={todos.id} 
          todo = {todos} 
          onToggle = {() => onToggle(todos.id)}
          onDelete = {() => onDelete(todos.id)}
          /> // 解构赋值
        )}
      ): <p>还未添加任务哦</p> }
    </div>
  )
}
export default TodoList;