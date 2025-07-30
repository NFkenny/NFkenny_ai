import { useParams } from "react-router-dom";
import { useEffect, memo } from "react";
import { 
  Skeleton, 
  Swiper, 
  Image
} from "react-vant";
import { 
  ArrowLeft,
  Cart,
  ShopO, 
  ServiceO, 
  StarO,
  Logistics,
  LikeO,
  Description,
} from "@react-vant/icons";
import useDetailStore from "@/store/useDetailStore";
import Loading from "@/components/Loading";
import { useTitle } from "@/hooks/useTitle";
import styles from "./detail.module.css";

const BottomBar = memo(() => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.left}>
        <div className={styles.iconShop}>
          <ShopO />
          <span>店铺</span>
        </div>
        <div className={styles.iconCart}>
          <ServiceO />
          <span>客服</span>
        </div>
        <div className={styles.iconCart}>
          <Cart />
          <span>收藏</span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cartBtn}>
          <Cart />
          <span>加入购物车</span>
        </div>
        <div className={styles.buyBtn}>
          <Cart />
          <span>立即购买</span>
        </div>
      </div>
    </div>
  );
});

const Detail = () => {
  const { detail, loading, setDetail } = useDetailStore();
  const params = useParams();

  useEffect(() => {
    setDetail(params.id);
  }, []);

  useTitle(detail?.title || "详情");

  if (loading) {
    return <Skeleton />;
  }
  return (
    <>
      <nav className={styles.nav}>
        <ArrowLeft fontSize={36} />
        <Cart fontSize={36} />
      </nav>
      {/* 幻灯片 */}
      <div className={styles.container}>
        <Swiper>
          {detail.images.map((item, index) => (
            <Swiper.Item key={index}>
              <Image src={item.url} />
            </Swiper.Item>
          ))}
        </Swiper>
        <div className={styles.priceRow}>
          <div className={styles.price}>￥{detail.price}</div>
          <div className={styles.couponBtn}>登录查看更多</div>
        </div>
        <div className={styles.titleRow}>
          <div className={styles.tag}>Tag</div>
          <div className={styles.title}>{detail.title}</div>
        </div>
        <div className={styles.deliveryRow}>
          <Logistics className={styles.icon} fontSize={30} />
          <span className={styles.deliveryText}>
            预计3小时内发货 | 承诺48小时内发货
          </span>
          <br />
          <span className={styles.extraInfo}>河北保定 · 快递 · 免运费</span>
        </div>

        <div className={styles.row}>
          <LikeO className={styles.icon} />
          <span>7天无理由退货</span>
        </div>
        <div className={styles.row}>
          <Description className={styles.icon} />
          <span>风格 肩带是否可拆卸 是否带锁 有无夹层</span>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Detail;
