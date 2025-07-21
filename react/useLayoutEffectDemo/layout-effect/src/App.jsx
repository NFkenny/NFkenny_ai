import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef(null)
//   console.log(boxRef.current,'///',boxRef)
//   useEffect(() => {
//     console.log(boxRef.current.clientHeight)
//   }, [])
//   useLayoutEffect(() => {
//     console.log(boxRef.current.clientWidth)
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{height: '100px'}}></div>
//     </>
//   )
// }
// function App(){
//   const ref = useRef();
//   const [content,setContent] = useState('')
//   // useEffect(()=>{
//   //   setContent('o((>ω< ))o')
//   //   ref.current.style.height = '100px'
//   // },[])
//   useLayoutEffect(()=>{
//     setContent('o((>ω< ))o')
//     ref.current.style.height = '100px'
//   },[])
//   return(
//     <div ref={ref} style={{height:'50px',background:'lightblue'}}>
//       内容
//       {content}
//     </div>
//   )
// }

function NoFlickerDemo() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  // 使用useLayoutEffect避免闪烁
  useLayoutEffect(() => {
    // DOM已更新，但浏览器未渲染，此处修改会合并到一次渲染中
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div ref={ref} style={{ width: '100px', height: '100px', background: 'blue' }}>
      {width}
    </div>
  );
}
function App(){
  
  return(
    <>
      <NoFlickerDemo />
    </>
  )
}

export default App
