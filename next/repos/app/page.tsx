"use client"; // 客户端编译
// 事件监听、生命周期
import { useState, useEffect } from "react";
import { type Todo } from "@/app/types/todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    console.log(data);
    setTodos(data)
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const addTodo = async () => {
    if (newTodo.trim() === "") {
      return;
    }
    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: newTodo,
        completed: false,
      })
    })
    setNewTodo(""); // 提交后清空输入框
    fetchTodos(); // 刷新列表
  };
  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),  // 将id放入请求体
    })
    fetchTodos(); // 刷新列表
  }
  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(`/api/todos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, completed }),  // 将id放入请求体
    })
    fetchTodos(); // 刷新列表
  }
  return (
    // xm md base lg
    <main className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            My Todos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new todo"
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
            ></Input>
            <Button onClick={addTodo}>提交</Button>
          </div>
          <div className="space-y-2">
            {todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e)=>toggleTodo(todo.id, e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className={todo.completed ? "line-through" : ""}>
                    {todo.text}
                  </span>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
