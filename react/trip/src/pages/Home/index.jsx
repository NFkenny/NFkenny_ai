import {
  useTitle
} from '@/hooks/useTitle'
import {
  Tabs
} from 'react-vant'
import styles from './home.module.css'

const Home = () => {
  useTitle('Go Where Well');
  return (
    <div className={styles.container}>
      
    </div>
  )
}
export default Home