import Child from '../Child/Child';
import { useTheme } from '../../hooks/useTheme';
const Page = () => {
  const theme = useTheme();
  return(
    <>
      <div>
        <h1>Page</h1>
        {theme}
        <Child />
      </div>
    </>
  )
}

export default Page;