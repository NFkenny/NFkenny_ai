import { useImageStore } from "@/store/useImageStore";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import Waterfall from "@/components/Waterfall";

const Collection = () => {
  const {loading, images, fetchMore} = useImageStore();
  
  return (
    <div>
      <h1>Collection</h1>
      <Waterfall images={images} fetchMore={fetchMore} loading={loading} />
    </div>
  )
}
export default Collection