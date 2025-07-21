import {useState} from 'react'
import { 
  useNavigate, //Navigate 组件 js 跳转
  useLocation } from 'react-router-dom'
  
const Login = ()=>{
  const location = useLocation()
  // console.log(location.state.form);
  const navigate = useNavigate() //navigate 跳转
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(username === 'admin' && password === '123456'){
      localStorage.setItem('isLogin','true')
      navigate(location?.state?.from || '/')
    } else {
      alert('登录失败')
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>登录</div>
        <label>用户名</label>
        <input 
          type='text'
          placeholder='请输入用户名'
          required
          value={username}
          onChange={(event)=>setUsername(event.target.value)}
          />
          <br />
        <label>密码</label>
        <input type='password'
          placeholder='请输入密码'
          required
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          />
          <br />
          <button type='submit'>登录</button>
    </form>
  )
}
export default Login
