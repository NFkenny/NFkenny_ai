import { getRepoList } from "../api/repo"
import { create } from "zustand"

export const useRepoStore = create((set)=>({
  repos: [],
  loading: false,
  error: null,
  fetchRepos: async (owner) => {
    // 业务
    set({ loading: true, error: null })
    try {
      const res = await getRepoList('NFkenny')
      set({ repos: res.data, loading: false, error: null })
    } catch (error) {
      set({ loading: false, error: error.message })
    }
  }
}))