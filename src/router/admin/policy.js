// 政策法规路由文件
import Policy from '@/page/policy/policy'

const router = {
  path: '/policy',
  // name: 'Policy',
  component: Policy,
  // meta: '政策法规',
  children: [
    {
      path: '',
      name: 'PolicyList',
      component: resolve => require(['@/admin/policy/policyList'], resolve),
      meta: '政策法规'
    },
    {
      path: 'provinceOfPolicy',
      name: 'ProvinceOfPolicy',
      component: resolve => require(['@/admin/policy/provinceOfPolicy'], resolve),
      meta: '省市自治区'
    },
    {
      path: 'policyDetail',
      name: 'PolicyDetail',
      component: resolve => require(['@/page/policy/page/policyDetail'], resolve),
      meta: '查看详情'
    }
  ]
}

export default router
