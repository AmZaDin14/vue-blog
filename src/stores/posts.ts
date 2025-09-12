import type { Post } from '@/types/post'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [] as Post[],
    post: null as Post | null,
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
    async getPost(id: number) {
      this.loading = true

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (!res.ok) throw new Error('Failed to fetch the post')

      const data = await res.json()
      this.post = data

      this.loading = false
    },
  },
})
