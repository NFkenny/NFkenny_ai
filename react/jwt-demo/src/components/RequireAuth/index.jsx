import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserStore } from '../../store/user'

const RequireAuth = (props) =>{
    const {isLogin} = useUserStore();
    const navigate = useNavigate()
    const {pathname} = useLocation()
    useEffect(()=>{
        setTimeout(()=>{
            if(!isLogin){
                navigate('/login',{from: pathname})
            }
        },1000)
    },[])
    // return <Navigate to="/login" />
    
    return (
        <div>
            {
                isLogin ? (
                    props.children
                ) : (
                    <h1>请先登录</h1>
                )
            }
        </div>
    )
}
export default RequireAuth