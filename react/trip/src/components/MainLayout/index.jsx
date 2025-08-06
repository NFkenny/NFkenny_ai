import {
  useState
} from 'react'  
import {
  HomeO,
  Search,
  FriendsO,
  SettingO,
  UserO
} from '@react-vant/icons'
import {
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom'
import { Tabbar } from 'react-vant'
import { useEffect } from 'react'

// 菜单栏配置
const tabs = [
  {
    title: '首页',
    icon: <HomeO />,
    path: '/home'
  },
  {
    title: '优惠专区',
    icon: <Search />,
    path: '/discount'
  },
  {
    title: '收藏',
    icon: <FriendsO />,
    path: '/collection'
  },
    {
    title: '行程',
    icon: <SettingO />,
    path: '/trip'
  },
    {
    title: '我的',
    icon: <UserO />,
    path: '/account'
  },
]

const MainLayout = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    const path = location.pathname
    console.log(path)
    console.log(tabs.findIndex((tab)=> tab.path === path));
    const index = tabs.findIndex((tab)=> tab.path === path)
    setActive(index)
  },[location])
  return (
    <div 
      className='flex flex-col h-screen'
      style={{position:'relative',overflow:'hidden'}}
    >
      <div className='flex-1' style={{paddingBottom: '75px',overflowY: 'auto'}}>
        <Outlet />
      </div>
      {/* tabbar */}
      <Tabbar value={active} onChange={
        (key) => {
          setActive(key)
          navigate(tabs[key].path)
        }
      }>
        {tabs.map((tab,index)=> (
          <Tabbar.Item key={index} icon={tab.icon}>
            {tab.title}
          </Tabbar.Item>
        ))}
      </Tabbar>
    </div>
  )
}
export default MainLayout
