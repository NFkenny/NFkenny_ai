// 入口文件
import OpenAI from 'openai'; // 模块化引入

const openai = new OpenAI({
   apiKey: 'sk-wiybwxcwsqfbwmodahgeygnrzemnfmsoibxidotzolhutetr', // 你的 OpenAI API 密钥
   baseURL: 'https://api.siliconflow.cn/v1' //国内转发服务商
  });
//完成接口
const response = await openai.completions.create({
  // 通义千问
  model: 'Qwen/QwQ-32B',
  prompt: '请介绍一下你自己'
});