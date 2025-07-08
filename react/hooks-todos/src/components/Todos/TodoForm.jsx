import {
  useState // 私有状态
} from "react"
const TodoForm = (props) => {
  const { todos } = props
  // JSX 一定要有唯一最外层元素 树状来编译解析JSX
  return (
    <>
      <h2 className="header">TodoForm</h2>
      <form action=""></form>
    </>
  )
}
export default TodoForm