import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
// 路由懒加载
const home = r => require.ensure([], () => r(require('@/components/Home')), 'home')
const notfound = r => require.ensure([], () => r(require('@/components/NotFound')), 'notfound')
const log = r => require.ensure([], () => r(require('@/components/Log')), 'log')
const register = r => require.ensure([], () => r(require('@/components/Register')), 'register')

const router = new Router({
  routes: [
    {
      path: '/login',
      name: '/login',
      component: log
    },
    {
      path: '/register',
      name: '/register',
      component: register
    },
    {
      path: '/',
      name: '/',
      component: log
    },
    {
      path: '*',
      name: '*',
      component: notfound
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: home
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // 获取store里面的token
  let token = store.state.token
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requireAuth) {
    // 如果token消失需要重新登录
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()// 如果无需token,那么随它去吧
  }
})

export default router
