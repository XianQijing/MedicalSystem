import Notic from '@/page/notic/notic'

const router = {
  path: '/notic',
  // name: 'Notic',
  component: Notic,
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
        requireAuth: true
      }
    }
  ]
}

export default router
