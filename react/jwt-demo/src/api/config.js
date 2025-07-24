import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5173/api'
// 请求拦截器
axios.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // if (token) {
    // config.headers.Authorization = token
  // }
  let token = localStorage.getItem('token') || "";
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(res => {
  // console.log('res',res);
  return res
})
// 导出axios实例
export default axios