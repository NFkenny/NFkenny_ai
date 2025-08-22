import {
  NextResponse // res
} from 'next/server' // api server
// ts 是js超集
import { type Todo } from '@/app/types/todo';


let todos: Todo[] = [
  {
    id: 1,
    text: '学习react',
    completed: false
  },
  {
    id: 2,
    text: '学习ts',
    completed: false
  },
  {
    id: 3,
    text: '学习next',
    completed: false
  }
];

// Restful 一切皆资源
// 向用户暴露资源的
// method + 资源 URL定义规则
export async function GET() {
  return NextResponse.json(todos)
}

export async function POST(req: Request) {
  const data = await req.json();
  // 核心的数据，函数的参数，返回值
  const newTodo:Todo = {
    id: + Date.now(),
    text: data.text,
    // typeScript 除了强类型外，代码提升更快，写起来更快
    completed: false
  }
  todos.push(newTodo);
  return NextResponse.json(newTodo, {
    status: 201
  })
}

export async function PUT(req:Request) {
  const data = await req.json(); // 请求体
  todos = todos.map(todo =>
    todo.id === data.id ? {...todo, completed: data.completed} : todo
  );
  return NextResponse.json(todos);
}
// restful 简历
export async function DELETE(req: Request) {
  const data = await req.json();
  todos = todos.filter(todo => todo.id !== data.id);
  return NextResponse.json({
    message: '删除成功'
  })
}