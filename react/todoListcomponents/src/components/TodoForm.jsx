import { useState } from 'react'
function TodoForm(props) {
  const onAdd = props.onAdd;
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单的默认行为，即刷新页面
    console.log(text); // 打印表单的值
    onAdd(text); // 调用父组件的onAdd方法，将表单的值传递给父组件
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return(
    <form acution="http://www.baidu.com" onSubmit={handleSubmit}>
      <input 
          type='text'
          placeholder="请输入代办清单"
          value={text}
          onChange={handleChange}
      />
      <button type='submit'>提交</button>
    </form>
  )
}
export default TodoForm;