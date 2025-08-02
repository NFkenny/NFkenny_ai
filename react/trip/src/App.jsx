import { useState, Suspense, lazy } from 'react'
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'))
const Collection = lazy(() => import('@/pages/Collection'))
const Discount = lazy(() => import('@/pages/Discount'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Coze = lazy(() => import('./pages/Coze/index.jsx'));
const Detail = lazy(() => import('@/pages/Detail'))
const Search = lazy(() => import('@/pages/Search'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* 带有tabber的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/account' element={<Account />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="/coze" element={<Coze />}/>
            <Route path='/search' element={<Search />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
      <Toast />
    </>
  )
}

export default App
