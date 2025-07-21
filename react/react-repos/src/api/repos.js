import axios from 'axios'; // http 请求库
// http 请求的时候 所有接口地址的公共部分
const BASE_URL = 'http://api.github.com/'; // 基础地址
// https://github.com/repos/NFkenny/NFkenny_ai
// 标准http请求库 
// axios method url
// promise 现代
// api 模板 应用之外
export const getRepos = (username) => {
  return axios.get(`${BASE_URL}users/${username}/repos`);
}
export const getReposDetail = async (username,repoName) => {
  return await axios.get(`${BASE_URL}repos/${username}/${repoName}`);
}