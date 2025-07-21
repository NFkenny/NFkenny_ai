import { 
  useState,
  useReducer
} from 'react'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <LoginContext.Provider>
//         <ThemeContext.Provider>
//           <TodosContext.Provider>
//             <Layout>
//               <Header />
//               <Main />
//               <Footer />
//             </Layout>
//           </TodosContext.Provider>
//         </ThemeContext.Provider>
//       </LoginContext.Provider>
//     </>
//   )
// }

const initialState = { // 可以管理很多状态,设置初始状态
  count: 0,
  isLogin: false,
  theme: 'light'
}
// 管理 分部门
// reducer纯函数 返回可靠的状态
// 状态生产器
const reducer = (state, action) => {
  // increment 增加 decrease 减少 changeTheme 切换主题
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }
    case 'decrease':
      return {
        ...state,
        count: state.count - 1
      }
    case 'incrementByNum':
      return{
        ...state,
        count: state.count + parseInt(action.payload)
      }
    case 'changeTheme':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return state
  }
}
function App() {
  // 初始值 initialValue
  // 当前的状态值 旧状态 新状态
  // 界面由当前状态来驱动
  // 修改状态的方法 
  // 响应式
  // 管理 useState 有的，useReducer 都有 -> 高级点
  const [count, setCount] = useState(0)
  // 大型项目所用
  // dispatch 派发 函数 相当于 setState 
  // 参数固定 {type: '' } action_type
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{
    document.body.className = state.theme
  },[state.theme])
  return(
    <>
      <h1>当前计数: {state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrease'})}>-</button>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => dispatch({type: 'incrementByNum', payload: Number(count)})}>要增加的数</button>
      <button onClick={() => dispatch({type: 'changeTheme'})}>切换主题</button>
    </>
  )
}

export default App
