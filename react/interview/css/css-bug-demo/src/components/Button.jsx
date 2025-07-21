// 工程化 css模块化
import styles from './button.module.css'
const Button = () =>{
  return (
    <button className={styles.button}>按钮</button>
  )
}
export default Button