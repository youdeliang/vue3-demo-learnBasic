import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home/index'
import Login from '../views/Login/index'
import Register from '../views/Register'

// router 的配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      !isLogin ? next() : next({ name: 'Home' })
    }
  }, {
    path: '/login',
    name: 'Login',
    // 懒加载，异步加载路由，当访问此页面的时候才加载，其他页面不用加载。
    // 可以使首页加载快
    // 问题：跳转页面有点卡顿
    // component: () => import('../views/login/Login')
    component: Login,
    // 从哪来回哪去,只有访问login页面之前执行
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      !isLogin ? next() : next({ name: 'Home' })
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginorRegisterPage = (name === 'Login' || name === 'Register');
  (isLogin || isLoginorRegisterPage) ? next() : next({ name: 'Login' })
})
export default router
