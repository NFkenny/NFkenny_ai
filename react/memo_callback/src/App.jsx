import { 
  useEffect,
   useState,
   useCallback,
   useMemo // 缓存一个负责计算的值
} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('App render');
  const expensiveComputation = (n) => {
    // 复杂计算 开销高
    console.log('expensiveComputation');
    for(let i =0;i<10000;i++){
      i++;
    }
    return n*2
  }
  const result = useMemo(() => expensiveComputation(num),[num])
  useEffect(()=>{
    console.log('count',count)
  },[count])
  useEffect(()=>{
    console.log('num',num)
  },[num])
  // render 重新渲染
  // 不要重新生成，和useEffect []一样
  // callback回调函数 缓存
  const handleClick = useCallback(() => {
    console.log('handleClick');
  },[num])
  return (
    <>
      {/* <div>{expensiveComputation(num)}</div> */}
      <div>result: {result}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+count</button>
      <br />
      <button onClick={() => setNum((num) => num + 1)}>+num</button>
      <br />
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default App
