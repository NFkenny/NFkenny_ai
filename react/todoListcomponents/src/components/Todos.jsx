function Todos() {
  const props = {todos:[]}
  const todos = props.todos;
  return(
    <ul>
      {/* <li>Learn React</li>
      <li>Learn JavaScript</li>
      <li>Learn HTML</li> */
      todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))
      }
    </ul>
  )
}
export default Todos;