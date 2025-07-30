import {
  create
} from 'zustand'
import { getDetail } from '@/api/detail';

const useDetailStore = create((set) => ({
  detail: {
    title: '',
    desc: '',
    images: [],
    price: ''
  },
  loading: false,
  setDetail: async (id) => {
    set({loading: true});
    const res = await getDetail(id);
    set({
      detail: res.data,
      loading: false,
    })
  },
}))

export default useDetailStore