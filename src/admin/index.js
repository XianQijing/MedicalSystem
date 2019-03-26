import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/admin/homePage/homePage'
import UserCenter from '@/router/admin/userCenter'
import scientificServing from '@/router/admin/scientificServing'
import Policy from '@/router/admin/policy'
import Notic from '@/router/admin/notic'
import Login from '@/page/login/index'
import ManagementOfAchievement from '@/router/admin/managementOfAchievement'

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
      path: '/Login',
      // name: 'Login',
      component: Login,
      children: [
        {
          path: 'register',
          name: 'Register',
          meta: '注册',
          component: resolve => require(['@/page/login/components/register'], resolve)
        },
        {
          path: 'forget',
          name: 'Rorget',
          meta: '修改密码',
          component: resolve => require(['@/page/login/components/forgetPassword'], resolve)
        },
        {
          path: '',
          name: 'Login',
          meta: '登陆',
          component: resolve => require(['@/page/login/components/login'], resolve)
        }
      ]
    },
    scientificServing,
    Policy,
    Notic,
    ManagementOfAchievement
  ].concat(UserCenter)
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})
export default router
