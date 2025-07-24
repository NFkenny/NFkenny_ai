import { 
  useState,
  useEffect
} from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import {
  lazy,
  Suspense 
} from 'react'
import './App.css'

const Home = lazy(()=>import('./views/Home'))
const Login = lazy(()=>import('./views/Login'))
const Pay = lazy(()=>import('./views/Pay'))
const RequireAuth = lazy(()=>import('./components/RequireAuth'))
const NavBar = lazy(()=>import('./components/NavBar'))

function App() {
  
  useEffect(()=>{
    
  },[])
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={
            <RequireAuth>
              <Pay />
            </RequireAuth>
          }/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
