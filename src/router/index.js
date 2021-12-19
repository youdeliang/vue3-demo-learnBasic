import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home'
// import Login from '../views/Login'

// router 的配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    // 懒加载，异步加载路由，当访问此页面的时候才加载，其他页面不用加载。
    // 可以使首页加载快
    // 问题：跳转页面有点卡顿
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
