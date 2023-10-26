import { createRouter, createWebHashHistory } from 'vue-router'
import AuthRouter from '@/modules/auth/router'

const routes = [
  {
    path: "/auth",
    ...AuthRouter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router