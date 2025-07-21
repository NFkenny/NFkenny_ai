import { useContext } from "react"
import { TodoContext } from "../TodoContext"

export function useTodoContext() {
  // 从todo上下文获取数据
  return useContext(TodoContext)
}