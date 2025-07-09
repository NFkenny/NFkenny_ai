const TodoItem = (props) => {
  // 解构赋值 从props中解构出todo对象中的id、text、isComplete属性  
  const { id, text, isCompleted } = props.todo;
  const { onToggle,onDelete } = props;

  return (
    <>
    {/* 列表项 */}
    <div className="todo-item">
      <input type="checkbox" checked={isCompleted} onChange={()=>onToggle(id)}/> 
        <span className={isCompleted ? 'completed' : ''}>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
    </>
  )
}
export default TodoItem;