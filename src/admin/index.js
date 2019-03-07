import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/admin/homePage/homePage'
import UserCenter from '@/admin/userCenter/userCenter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/admin',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: '首页'
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: '用户中心'
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})
export default router
