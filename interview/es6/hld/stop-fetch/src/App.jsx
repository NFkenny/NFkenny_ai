import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isStop, setIsStop] = useState(false);
  const [isRequestCompleted, setIsRequestCompleted] = useState(false);
  let controller = new AbortController();

  useEffect(() => {
    fetch('/api/banners', {
      signal: controller.signal
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setIsRequestCompleted(true); // 标记请求已完成
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('请求被中止');
      } else {
        console.error('请求失败:', error);
        setIsRequestCompleted(true); // 即使失败也标记为完成
      }
    });
  }, []);

  const stop = () => {
    if (!isRequestCompleted) {
      // 只有请求未完成时才中止
      setIsStop(true);
      controller.abort();
      console.log('请求被中止');
    } else {
      console.log('请求已完成，无法中止');
      // 请求已完成，不修改isStop状态
    }
  };

  return (
    <>
      <button onClick={stop} disabled={isRequestCompleted}>
        {isRequestCompleted ? '请求已完成' : '中止请求'}
      </button>
      {isStop && <div>请求被中止</div>}
      {!isStop && <div>请求未被中止</div>}
    </>
  );
}

export default App
