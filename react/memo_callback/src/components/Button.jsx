import { 
  useEffect,
  memo
 } from "react";


const Button = ()=>{

  useEffect(()=>{
    console.log('button useEffect');
  },[])
  console.log('Button render');
  return (
    <button>
      按钮
    </button>
  )
}
// 高阶组件
export default memo(Button)