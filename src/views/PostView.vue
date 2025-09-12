<template>
  <h1>Posts List:</h1>
  <p v-if="PostStore.loading">Loading...</p>
  <ul v-else>
    <li v-for="post in PostStore.posts" :key="post.id">
      <span>{{ post.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/posts'
import { onMounted } from 'vue'

const PostStore = usePostStore()

onMounted(async () => {
  await PostStore.getPosts()
})
</script>
