// 政策法规路由文件
import Layout from '@/layout/layout'

const router = {
  path: '/policy',
  component: Layout,
  // meta: '政策法规',
  children: [
    {
      path: '',
      name: 'PolicyList',
      component: resolve => require(['@/user/policy/policyList'], resolve),
      meta: {
        title: '政策法规',
        requireAuth: true
      }
    },
    {
      path: 'provinceOfPolicy',
      name: 'ProvinceOfPolicy',
      component: resolve => require(['@/user/policy/provinceOfPolicy'], resolve),
      meta: {
        title: '省市自治区',
        requireAuth: true
      }
    },
    {
      path: 'policyDetail',
      name: 'PolicyDetail',
      component: resolve => require(['@/page/policy/page/policyDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
