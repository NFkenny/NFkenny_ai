import SearchBox from "@/components/SearchBox";
import useSearchStore from "@/store/useSearchStore";
import { useState,useEffect,memo } from "react";
import styles from './search.module.css'

const HotListItems = memo(({hotList})=>{
  return (
    <div className={styles.hotList}>
      <h1>热门搜索</h1>
      {
        hotList.map(item => (
          <div className={styles.item} key={item.id}>
            {item.city}
          </div>
        ))
      }
    </div>
  )
})

const Search = () => {
  const [query,setQuery] = useState('');
  const { suggestList, setSuggestList, hotList, setHotList } = useSearchStore();
  
  useEffect(()=>{
    setHotList();
  },[])
  
  // 单向数据流
  // 反复生成 useCallback
  const handleQuery = (query) => {
    console.log("debounce之后的搜索:", query);
    setQuery(query);
    if (!query) {
      return;
    }
    setSuggestList(query);
    console.log('suggestList:',suggestList);
    
  };
  const suggestListStyle ={
    display: query === '' ? 'none' : 'block',
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBox handleQuery={handleQuery} />
        {/* 维护性 */}
        <HotListItems hotList={hotList} />
        <div className={styles.list} style={suggestListStyle}>
          {
            suggestList.map(item => (
              <div className={styles.item} key={item}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default memo(Search);
