import { useState } from 'react'
import './App.css'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

function App() {
  
  return (
    <>
     <Router>
     <nav>
      <ul>
        <li>
          <Link to="/pages/Home" >首页</Link>
        </li>
        <li>
          <Link to="/pages/About" >关于</Link>
        </li>
      </ul>
     </nav>
     <main>
      <div className="container">
        <Routes>
          <Route path="/pages/Home" element={<Home />}/>
          <Route path="/pages/About" element={<About />}/>
        </Routes>
      </div>
     </main>
     </Router>
    </>
  )
}

export default App