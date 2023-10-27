import { createRouter, createWebHashHistory } from 'vue-router'
import AuthRouter from '@/modules/auth/router'
import MainRouter from '@/modules/main/router'


const routes = [
  {
    path: "/auth",
    ...AuthRouter,
  },
  {
    path: "/main",
    ...MainRouter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router