// 工程化 css模块化
import styles from './another-button.module.css'
const AnotherButton = () =>{
  return (
    <button className={styles.button}>另一个按钮</button>
  )
}
export default AnotherButton