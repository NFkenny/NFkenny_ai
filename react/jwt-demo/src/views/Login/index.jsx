import {
    useRef
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store/user'
const Login = () =>{
    const usernameRef = useRef()
    const passwordRef = useRef()
    const {setLogin} = useUserStore();
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault();
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        if(!username || !password){
            alert('请输入用户名和密码')
            retrun 
        }
        setLogin({username,password})
        setTimeout(()=>{
            navigate('/')
        },1000)
    }
    return (
        <div>
            <h2>登录</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">用户名</label>
                    <input 
                        type="text" 
                        ref={usernameRef} 
                        placeholder="请输入用户名"
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">密码</label>
                    <input 
                        type="password"
                        id='password'
                        ref={passwordRef} 
                        placeholder="请输入密码"
                        required 
                    />
                </div>
                <button type="submit">登录</button>
            </form>
        </div>
    )
}
export default Login