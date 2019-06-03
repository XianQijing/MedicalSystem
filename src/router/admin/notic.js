import Layout from '@/layout/layout'

const router = {
  path: '/Notic',
  // name: 'Notic',
  component: Layout,
  children: [
    {
      path: '',
      name: 'NoticList',
      component: resolve => require(['@/admin/notic/noticList'], resolve),
      meta: {
        title: '通知公告',
        requireAuth: true
      }
    },
    {
      path: 'addOrEdit',
      name: 'AddOrEdit',
      component: resolve => require(['@/admin/notic/addOrEdit'], resolve),
      meta: {
        title: '通知',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
