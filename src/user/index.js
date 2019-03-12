import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/user/homePage/homePage'
import UserCenter from '@/user/userCenter/userCenter'
import Login from '@/common/page/login/index'

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
          component: resolve => require(['@/common/page/login/components/register'], resolve)
        },
        {
          path: 'forget',
          name: 'Rorget',
          meta: '修改密码',
          component: resolve => require(['@/common/page/login/components/forgetPassword'], resolve)
        },
        {
          path: '',
          name: 'Login',
          meta: '登陆',
          component: resolve => require(['@/common/page/login/components/login'], resolve)
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})
export default router
