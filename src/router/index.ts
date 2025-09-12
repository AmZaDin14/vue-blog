import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'post-list',
      path: '/posts',
      component: import('@/views/PostView.vue'),
    },
    {
      name: 'post-detail',
      path: '/posts/:id',
      props: true,
      component: import('@/views/PostDetail.vue'),
    },
  ],
})

export default router
