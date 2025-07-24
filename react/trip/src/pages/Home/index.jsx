import {
  useTitle
} from '@/hooks/useTitle'
const Home = () => {
  useTitle('Go Where Well');
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
export default Home