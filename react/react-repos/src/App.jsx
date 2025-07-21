import { 
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom'
import Loading from './component/Loading.jsx'
import './App.css'

const RepoList = lazy(()=> import('./pages/RepoList'))
const RepoDetail = lazy(()=> import('./pages/RepoDetail'))
const Home = lazy(()=> import('./pages/Home'))
const NotFound = lazy(()=> import('./pages/NotFound'))

function App() {
  
  // useEffect(() => {
  //   (async()=>{
  //     const repos = await getRepos('NFkenny');
  //     const repo = await getReposDetail('NFkenny','NFkenny_ai');
  //     console.log(res);
  //   })()
  //   // return ()=>{
  //   //   console.log('unmount');
  //   // }
  // }, [])
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id/repos" element={<RepoList />} />
        <Route path="/users/:id/repos/:repoId" element={<RepoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
