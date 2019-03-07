import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/user/homePage/homePage'
import UserCenter from '@/user/userCenter/userCenter'
// import UserHomePage from '@/User/homePage/homePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/user',
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
