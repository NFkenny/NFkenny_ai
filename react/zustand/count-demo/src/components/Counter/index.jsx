import { useCounterStore } from '../../store/count'
// 来自store
const Counter = () =>{  
  const {
    count,
    increase,
    decrease
  } = useCounterStore()
  return(
    <>
      <div>
        Counter {count}
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </>
  )
}
export default Counter