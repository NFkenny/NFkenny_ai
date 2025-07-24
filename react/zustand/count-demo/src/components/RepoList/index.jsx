import { useEffect } from 'react'
import { useRepoStore } from '../../store/repos'
const RepoList = ()=>{
  const { repos, loading, error, fetchRepos } = useRepoStore()
  useEffect(()=>{
    fetchRepos('NFkenny')
  },[])
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error.message}</p>
  }
  return(
    <>
      <h2>Repo List</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description || 'No description'}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default RepoList