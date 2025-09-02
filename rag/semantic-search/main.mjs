import { 
  client
} from './llm.mjs';
import fs from 'fs/promises';
import { cosineSimilarity } from './llm.mjs';

const inputFilePath = './data/posts_with_embedding.json';
const data = await fs.readFile(inputFilePath, 'utf-8');
const posts = JSON.parse(data);

// 向量  cosine函数 文本语义检索
// 你好  hello
// LIKE 文本的检索

const response = await client.embeddings.create({
  model: 'text-embedding-ada-002',
  input: `css`,
});

const {
  embedding
} = response.data[0];

const results = posts.map((item) => {
  return {
    ...item,
    similarity: cosineSimilarity(embedding, item.embeddings)
  }})
  .sort((a,b)=> a.similarity - b.similarity)
  .reverse()
  .slice(0,3)
  .map((item,index) => `${index + 1}.${item.title}, ${item.category}\n`)
  .join('')
console.log(results);
