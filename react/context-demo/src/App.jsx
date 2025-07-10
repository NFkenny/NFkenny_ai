import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { ThemeContext } from './ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)
  console.log(ThemeContext.Provider);
  
  return (
      <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={() => setTheme('dark')}>切换主题</button>
    {/* <Uncle /> */}
    {/* <Parent>
      <Child>
        <GrandChild>
          <GreatGrandChild />
        </GrandChild>
      </Child>
    </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App
