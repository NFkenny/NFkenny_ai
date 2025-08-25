"use client"
import { 
  useState,
  useEffect
} from "react";
import {
  type Todo
} from "@/types/todo";
import { todo } from "node:test";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    console.log(data);
    setTodos(data);
  };

  const addTodo = async () => {
    if (input.trim() === "") {
      return;
    }
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: input,
        completed: false
      })
    });
    const newTodo = await res.json();
    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const deleteTodo = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "DELETE"
    })
    const data = await res.json();
    if (data.success) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: !completed
      })
    });
    const updated = await res.json();
    setTodos(todos.map(todo => todo.id === id ? updated : todo));
  };
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Todos</h1>
        <div className="flex items-center justify-center">
          <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new todo"
            className="border border-gray-300 rounded-md p-2 flex-1 m-4"
            type="text" 
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Add
          </button>
        </div>
        <div>
          <ul className="space-y-2 w-70 max-w-md">
            {
              todos.map(todo => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center p-2 border rounded"
                >
                  <span
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                    className={todo.completed ? "line-through" : ""}
                  >
                    {todo.title}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white rounded-md p-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}