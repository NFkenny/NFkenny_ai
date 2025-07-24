import axios from './config'
// 获取用户信息
export const getUser = async () => {
  return axios.get('/user')
}
export const doLogin = (data) =>{
  return axios.post('/login',data)
}
// 获取用户文章列表
// export const getUserArticles = ()=>{
//   return axios.get('/user/articles')
// }