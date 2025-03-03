import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/echarts',
    name: 'EchartsHome',
    component: () => import('@/pages/EchartsHome/index.vue'),
    meta: {
      title: 'Echarts实践'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router