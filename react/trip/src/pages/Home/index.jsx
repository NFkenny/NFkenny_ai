import {
  useTitle
} from '@/hooks/useTitle'
import {
  Tabs,
  Button
} from 'react-vant'
import {
  showToast
} from '@/components/Toast/toastController'
import SearchBox from '@/components/SearchBox'
import styles from './home.module.css'

const Home = () => {
  useTitle('Go Where Well');
  return (
    <div className={styles.container}>
      <SearchBox />
      <Button type="primary" onClick={()=>{
        showToast(1,2,3);
      }}>
        显示Toast
      </Button>
    </div>
  )
}
export default Home