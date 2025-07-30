import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// javascript 可能会有些问题，主要是因为弱类型
// jsx 后缀改成 tsx
// 函数进行类型约束
// const HelloComponent = ()=>{
//   // void 空 ReactNode
//   return <h1>Components</h1>
// }


function App() {
  // 编译阶段 
  // 多写了些类型申明文件
  // 多写了一些代码
  let count:number = 10;
  const title:string = "Hello TS"
  const isDone: boolean = true;
  const list:number[] = [1, 2, 2];
  const tuple:[string,number] = ["立军军",18];
  enum Status {
    Pending,
    Fullfilled,
    Rejected
  }
  const pStatus: Status = Status.Pending
  // 对象的约束？
  // 接口类 
  interface User {
    name: String;
    age: number;
    isSingle?: boolean
  }
  // 使用interface 来约定类型
  const user:User = {
    name: '立军军',
    age: 18,
    isSingle:true  
  }  
  return (
    <>
      {title}
      {count}
      {user.name} {user.age}
      {/* typescript 很严格 */}
      <HelloComponent name="立军军"/>
    </>
  )
}

export default App
