import {
  useParams,
  useNavigate,
  Link
} from 'react-router-dom'
import { useEffect } from 'react';
import { useRepos } from '@/hooks/useRepos'


const RepoList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {id} = params;
  const {repos,loading,error,state} = useRepos(id)
  console.log(repos);
  console.log(loading);
  console.log(error);
  console.log(state);
  console.log(params);
  console.log(id);
  useEffect(()=>{
    if(!id.trim()){
      navigate('/')
    }
  },[])
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error.message}</p>
  }
  return(
    <>
      <h1>RepoList</h1>
      {repos && (
        <ul>
          {
            repos.map(repo => (
              <li key={repo.id}>
                <Link to={`/users/${id}/repos/${repo.name}`}>
                  {repo.name}
                </Link>
              </li>
            ))
          }
        </ul>
      )}
    </>
  )
}
export default RepoList;