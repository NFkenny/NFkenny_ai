// todoList store
// 全局状态模块化
import {
  create 
} from 'zustand'
export const useTodoStore = create((set) => ({
  todos: [
    {
      id: 1,
      title: '学习 Zustand',
      completed: false,
    },
    {
      id: 2,
      title: '学习 React',
      completed: false,
    },
  ],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    })),
    
  })),
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}))