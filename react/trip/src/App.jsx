import { useState, Suspense, lazy } from 'react'
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'


const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Collection = lazy(() => import('@/pages/Collection'))
const Discount = lazy(() => import('@/pages/Discount'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        {/* 带有tabber的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/account' element={<Account />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
