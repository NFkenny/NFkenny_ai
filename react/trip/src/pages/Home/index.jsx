import {
  useTitle
} from '@/hooks/useTitle'
import {
  Tabs
} from 'react-vant'
import SearchBox from '@/components/SearchBox'
import styles from './home.module.css'

const Home = () => {
  useTitle('Go Where Well');
  return (
    <div className={styles.container}>
      <SearchBox />
    </div>
  )
}
export default Home