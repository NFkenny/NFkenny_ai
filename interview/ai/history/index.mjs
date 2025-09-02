import OpenAI from 'openai';
import { config } from 'dotenv';

config();
// console.log(process.env.OPENAI_API_KEY);
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
});
// LLM 聊天也和HTTP 一样是无状态的
// LLM 聊天历史需要我们自己管理
const messages = [
  {
    role: 'system',
    content: '你是一个友好的助教。',
  }
];
async function withMemoryChat(userInput) {
  messages.push({
    role: 'user',
    content: userInput,
  })
  const res1 = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: "你好我叫南方kenny",
      },
    ],
  });
  const reply = res1.choices[0].message.content;
  messages.push({
    role: 'assistant',
    content: reply,
  })
  console.log('回复:', reply);
  return reply;
}
async function demo() {
  await withMemoryChat('你好我叫南方kenny');
  await withMemoryChat('哈喽');
}
demo();

// async function noMemoryChat() {
//   const res1 = await client.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "user",
//         content: "今天抚州天气怎么样?",
//       },
//     ],
//   });
//   console.log('第一次回复:', res1.choices[0].message.content);
//   const res2 = await client.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "user",
//         content: "我想知道刚刚城市的人文环境",
//       },
//     ],
//   })
//   console.log('第二次回复:', res2.choices[0].message.content);
// }
// noMemoryChat();
