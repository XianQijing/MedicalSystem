import Login from '@/page/login/index'

const router = {
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
}

export default router
