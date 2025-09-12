import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    loading: false,
  }),
  actions: {
    async getPosts() {
      this.loading = true

      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error('Failed to fetch posts')

      const data = await res.json()

      this.posts = data
      this.loading = false
    },
  },
})
