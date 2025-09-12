<template>
  <p v-if="PostStore.loading">Loading...</p>
  <div v-else>
    <h1>{{ PostStore.post?.title }}</h1>
    <p>{{ PostStore.post?.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/posts'
import { onMounted } from 'vue'

const props = defineProps({ id: Number })

const PostStore = usePostStore()

onMounted(async () => {
  await PostStore.getPost(props.id!)
})
</script>
