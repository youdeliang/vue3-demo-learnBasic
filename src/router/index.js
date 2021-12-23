import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home/index'
import Index from '../views/index'
import Login from '../views/Login/index'

// router 的配置
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    // 懒加载，异步加载路由，当访问此页面的时候才加载，其他页面不用加载。
    // 可以使首页加载快
    // 问题：跳转页面有点卡顿
    // component: () => import('../views/login/Login')
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to, from :>> ', to, from)
  next()
  // const { isLogin } = localStorage;
  // (!isLogin && to.name !== 'Login') ? next({ name: 'Login' }) : next()
})
export default router
