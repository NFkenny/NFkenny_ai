import { 
  lazy,
  Suspense 
} from 'react'
import './App.css'
import Navigation from './components/Navigation'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import ProtectRoute from './components/ProtectRoute'
import Pay from './pages/Pay'
// 函数 路由 -> Route
// 懒加载 新的组件 
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const NotFound = lazy(()=>import('./pages/NotFound'))
const Login = lazy(()=>import('./pages/Login'))
// import Home from './pages/Home'
// import About from './pages/About'
// 30几个页面

function App() {
  
  return (
    <>
      <Router>
        <Suspense fallback={<div>loading</div>}>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 鉴权 */}
            <Route path='/pay' element={
              <ProtectRoute>
                <Pay />
              </ProtectRoute>
            }/>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}
export default App