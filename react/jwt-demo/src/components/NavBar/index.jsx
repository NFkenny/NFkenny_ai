import {
  Link
} from 'react-router-dom'
import {
  useUserStore
} from '../../store/user'

const NavBar = () => {
  const {user,isLogin,setLogout} = useUserStore();
  console.log(user,isLogin,'//////');
  return (
    <nav style={{padding:'10px',borderBottom:'1px solid #ccc'}}>
      <div>
        <Link to="/">首页</Link>&nbsp;&nbsp;
        <Link to="/pay">支付</Link>&nbsp;&nbsp;
        {
          isLogin ? (
            <>
            <button onClick={setLogout}>Logout</button>
            <br />
            <span>欢迎您，{user.username}</span>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )
        }
      </div>
    </nav>
  )
}
export default NavBar