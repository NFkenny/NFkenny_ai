import React from 'react'
// 如何约束函数的返回值为ReactNode？JSX 
// FC == FunctionComponent
// 如何约定字节需要一个name 的 prps？
interface Props {
  name:string;
}
// typescript 类型约束， 重要的地方一定要约束
// 参数，返回值
// 泛型 泛指内部的类型
const HelloComponent:React.FC<Props> = (props) => {
  // const { name } = props
  return (
    <h1>Hello Component {props.name}</h1>
  )
}

export default HelloComponent