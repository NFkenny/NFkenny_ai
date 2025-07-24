export default[
  {
    url: '/api/todos',
    method: 'get',
    response: () => {
      const todos = [
        {
          id: 1,
          title: '学习 react',
          completed: false,
        },
        {
          id: 2,
          title: '学习 vue',
          completed: true,
        },
      ]
      return {
        code: 0, // 没有错误
        msg: 'success',
        data: todos,
      }
    }
  },
  
  {
    url: '/repos',
    method: 'get',
    response: () => {
      const repos = [
        {
          id: 1,
          name: 'react-demo',
          description: 'react demo',
        },
        {
          id: 2,
          name: 'vue-demo',
          description: 'vue demo',
        },
      ]
      return {
        code: 0, // 没有错误
        msg: 'success',
        data: repos,
      }
    }
  },
  
]