import styles from "./waterfall.module.css";
import { useEffect, useRef } from "react";
import ImageCard from '@/components/ImageCard'; 

const Waterfall = (props) => {
  const {loading,fetchMore,images} = props;
  const loader = useRef(null);
  useEffect(()=>{
    // ref 出现在视窗 intersectionObserver
    // 观察者模式 监听ref元素是否出现在视窗 
    const observer = new IntersectionObserver(([entry],obs) => {
      if (entry.isIntersecting) {
        fetchMore();
      }
    });
    if(loader.current) observer.observe(loader.current);
    return () => observer.disconnect()
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        {
          images.filter((_, i) => i% 2 === 0 ).map(img => (
              <ImageCard url={img.url} height={img.height} key={img.id}/>
          ))
        }
      </div>
      <div className={styles.column}>
        {
          images.filter((_, i) => i% 2 !== 0 ).map(img => (
              <ImageCard url={img.url} height={img.height} key={img.id}/>
          ))
        }
      </div>
      <div ref={loader} className={styles.loader}>加载中...</div>
    </div>
  )
}
export default Waterfall;