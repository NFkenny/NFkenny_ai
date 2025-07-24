import { 
  useState,
  useEffect
 } from 'react'
import './App.css'
import{
  getTodos,
  getRepos
} from '@/api'
function App() {
  const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      // const todoResult = await getTodos()
      // console.log(todoResult);
      // setTodos(todoResult.data.data)
      const reposResult = await getRepos()
      setRepos(reposResult.data.data)
      // setRepos(reposResult.data)
      console.log(reposResult);
    }
    fetchData();
  },[])

  return (
    <>
      {/* {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))
      } */}
      {
      repos.map((repo) => (
        <li key={repo.id}>
          {repo.name}
        </li>
      ))
      }
    </>
  )
}

export default App