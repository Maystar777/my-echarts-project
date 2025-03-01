import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home.vue'),
    // meta: {
    //   title: '酷屏首页统计图'
    // }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router