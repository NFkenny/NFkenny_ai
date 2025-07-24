import jwt from 'jsonwebtoken'

// 安全性 编码的时候加密
// 解码的时候用于解密
// secret 加盐
const secret = '!@248codejwt'

// login 模块 mock
export default[
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000, //请求耗时
    response: (req,res) => {
      // rep, username, password
      const {username,password} = req.body
      console.log('reqBody',req.body);
      
      if (username !== 'admin' || password !== '123456') {
        return {
          code: 1,
          msg: '登录失败',
        }
      }
      // json 用户数据
      const token = jwt.sign({
        user: {
          id:114,
          username:'admin',
          password:'123456',
          level:4
        }
      },secret,{
        expiresIn: 86400
      })
      // 生成token 颁发令牌
      return {
        token,
        code: 0,
        msg: '登录成功',
        data: {
          id:114,
          username:'admin',
          password:'123456',
          level:4
        }
      }
    }
  },
  {
    url: '/api/user',
    method: 'get',
    timeout: 2000, //请求耗时
    response: (req,res) => {
      // 用户端 token headers
      const token = req.headers["authorization"].split(' ')[1];
      console.log('token',token);
      try{
        const decode = jwt.decode(token,secret)
        console.log('decode',decode);
        return {
          code: 0,
          msg: '登录成功',
          data: decode.user
        }
      }catch(err){
        return {
          code: 1,
          msg: '登录失败',
        }
      }
      return{
        token
      }
    }
  }
]