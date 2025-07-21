// 将回调风格API转换为Promise版本
function loginPromise(username, password) {
  return new Promise((resolve, reject) => {
    login(username, password, resolve, reject);
  });
}

function getProfilePromise(userId) {
  return new Promise((resolve, reject) => {
    getProfile(userId, resolve, reject);
  });
}

function getMessagesPromise(userId) {
  return new Promise((resolve, reject) => {
    getMessages(userId, resolve, reject);
  });
}

function getRecommendationsPromise(userId) {
  return new Promise((resolve, reject) => {
    getRecommendations(userId, resolve, reject);
  });
}
// 使用Promise链式调用重构
// loginPromise(username, password)
//   .then(user => {
//     console.log('登录成功:', user.id);
//     // 将用户ID传递给下一个Promise
//     return { user, userId: user.id };
//   })
//   .then(({ userId }) => {
//     return getProfilePromise(userId)
//       .then(profile => ({ userId, profile }));
//   })
//   .then(({ userId, profile }) => {
//     return getMessagesPromise(userId)
//       .then(messages => ({ userId, profile, messages }));
//   })
//   .then(({ userId, profile, messages }) => {
//     return getRecommendationsPromise(userId)
//       .then(recommendations => ({ profile, messages, recommendations }));
//   })
//   .then(({ profile, messages, recommendations }) => {
//     renderDashboard(profile, messages, recommendations);
//   })
//   .catch(error => {
//     // 统一错误处理
//     console.error('流程执行失败:', error);
//   });
// 优化后的Promise链式调用
// 添加用户名和密码定义
const username = 'testuser'; // 实际使用时替换为真实用户名
const password = 'testpassword'; // 实际使用时替换为真实密码
function login(username, password, resolve, reject) {
  // 模拟异步登录请求
  setTimeout(() => {
    if (username && password) {
      // 登录成功，返回用户信息
      resolve({
        id: Math.floor(Math.random() * 1000),
        username: username,
        token: 'mock-jwt-token-' + Date.now()
      });
    } else {
      // 登录失败，返回错误信息
      reject(new Error('用户名和密码不能为空'));
    }
  }, 800); // 模拟网络延迟
}
// 模拟用户资料获取
function getProfile(userId, resolve, reject) {
  // 模拟网络请求延迟
  setTimeout(() => {
    if (userId) {
      // 返回模拟的用户资料数据
      resolve({
        id: userId,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://i.pravatar.cc/150?img=' + userId,
        joinDate: '2023-01-15',
        role: 'user'
      });
    } else {
      reject(new Error('用户ID不能为空'));
    }
  }, 600);
}

// 消息列表获取函数
function getMessages(userId, resolve, reject) {
  setTimeout(() => {
    if (userId) {
      // 返回模拟的消息列表
      resolve([
        {
          id: 1,
          sender: 'system',
          content: '欢迎回来！您有3条新通知',
          timestamp: new Date(Date.now() - 3600000).toISOString()
        },
        {
          id: 2,
          sender: 'alice@example.com',
          content: '关于项目的更新计划...',
          timestamp: new Date(Date.now() - 7200000).toISOString()
        }
      ]);
    } else {
      reject(new Error('用户ID不能为空'));
    }
  }, 800);
}

// 推荐内容获取函数
function getRecommendations(userId, resolve, reject) {
  setTimeout(() => {
    if (userId) {
      // 返回模拟的推荐内容
      resolve([
        {
          id: 101,
          title: 'JavaScript Promise最佳实践',
          type: 'article',
          score: 4.8
        },
        {
          id: 102,
          title: 'React Hooks完全指南',
          type: 'course',
          score: 4.9
        }
      ]);
    } else {
      reject(new Error('用户ID不能为空'));
    }
  }, 700);
}
// 渲染用户仪表板
function renderDashboard(profile, messages, recommendations){
  console.log('用户资料:', profile);
  console.log('消息列表:', messages);
  console.log('推荐内容:', recommendations);
}
// 登录并获取用户数据
loginPromise(username, password)
  .then(user => {
    console.log('登录成功:', user.id);
    return Promise.all([
      getProfilePromise(user.id),
      getMessagesPromise(user.id),
      getRecommendationsPromise(user.id)
    ]);
  })
  .then(userId => Promise.all([
    // 并行执行可以同时获取的数据
    getProfilePromise(userId),
    getMessagesPromise(userId),
    getRecommendationsPromise(userId)
  ]))
  .then(([profile, messages, recommendations]) => {
    renderDashboard(profile, messages, recommendations);
  })
  .catch(error => {
    console.error('流程执行失败:', error);
    // 错误恢复逻辑
  });
  
  // 使用async/await优化Promise代码
async function initUserDashboard(username, password) {
  try {
    const user = await loginPromise(username, password);
    console.log('登录成功:', user.id);

    // 并行获取数据
    const [profile, messages, recommendations] = await Promise.all([
      getProfilePromise(user.id),
      getMessagesPromise(user.id),
      getRecommendationsPromise(user.id)
    ]);
  } catch (error) {
    console.error('初始化失败:', error);
  }
}
// 调用函数
initUserDashboard('john_doe', 'password123');