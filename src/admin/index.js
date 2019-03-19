import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/admin/homePage/homePage'
import UserCenter from '@/router/admin/userCenter'
import scientificServing from '@/router/admin/scientificServing'
import Login from '@/page/login/index'

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
    scientificServing
  ].concat(UserCenter)
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})
export default router
