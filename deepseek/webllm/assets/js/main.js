// console.log('WebLLM 项目已启动');
// js 主动的去拉取http 接口
// web 1.0 时代 html/css/js 服务器端java 返回的html 页面，js 只做简单的交互
// web 2.0 时代 前后端分离，前端js 主动请求后端服务器 动态业务
// fetch('https://api.github.com/users/NFkenny/repos')
// .then(response => response.json())
// .then(data => {
//     // console.log('GitHub Repos:', data);
//     document.querySelector('#reply').innerHTML = data.map(repo => `
//         <ul>
//             <li>
//                 <a href="${repo.html_url}" target="_blank">${repo.name}</a>
//                 <p>${repo.description}</p>
//             </li>
//         </ul>
//         `).join('');
// })

// 当LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由openai 制定的

// 请求行
const endpoint = 'https://api.deepseek.com/chat/completions'
// 请求头
const headers = {
    // 内容类型
    'Content-Type': 'application/json',
    // 授权
    Authorization: `Bearer sk-70e1c6c87a144105a7160d5602317a47`
};

const payload = {
    // 模型
    model: 'deepseek-chat',
    // 消息
    messages: [
        //chat 三种方式
        // 1.系统角色 只会出现一次 设置系统的角色 开始会话时
        // 2.用户角色
        // 3.助手角色
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '你好 DeepSeek' }
    ],
}
fetch(endpoint, {
    method: 'POST',
    headers: headers,
    // http 请求传输只能是字符串，二进制流
    body: JSON.stringify(payload)
    // 请求 + LLM 生成需要花时间
    // http 是基于请求响应的简单协议
    // 返回的也是文本或二进制流
}).then(res => res.json())
.then(data => {
    console.log(data);
    // 解析返回的json数据 需要花时间
        document.querySelector('#reply').innerHTML
         = data.choices[0].message.content;
});

// 基础事件绑定
// document.getElementById('submitBtn').addEventListener('click', async () => {
//     const prompt = document.getElementById('promptInput').value;
    
//     // 预留LLM接口集成点
//     try {
//         // const response = await fetchLLMResponse(prompt);
//         // handleResponse(response);
//         console.log('LLM集成点:', prompt);
//     } catch (error) {
//         console.error('请求失败:', error);
//     }
// });

// // 示例模块化结构
// const App = {
//     init() {
//         this.bindEvents();
//     },
    
//     bindEvents() {
//         // 其他事件绑定...
//     },
    
//     // 可扩展方法...
// };

// App.init();