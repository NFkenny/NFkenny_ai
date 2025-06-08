import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const titles = ['jym', '掘老板', '掘友们老板'];
  const todosList = [
    ['吃饭', '睡觉', '打豆豆'],
    ['吃饭', '睡觉', '打豆豆', '养鱼'],
    ['吃饭', '睡觉', '打豆豆', '养鱼', '健身']
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState(titles[0]);
  const [todos, setTodos] = useState(todosList[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTitle(titles[currentIndex]);
    setTodos(todosList[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <div className='title'><h1>{title}</h1></div>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
        {
          // react 一个括号代表一个表达式
          // js DOM 编程API
          // 在html 里面写 js 代码
          todos.map((item, index) => (
            <tr key = {index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
            )
          )
        }
        </tbody>
      </table>
    </>
  );
}
export default App
