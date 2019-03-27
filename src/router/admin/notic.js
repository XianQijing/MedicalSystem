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
      meta: '通知公告'
    },
    {
      path: 'addOrEdit',
      name: 'AddOrEdit',
      component: resolve => require(['@/admin/notic/addOrEdit'], resolve),
      meta: '通知'
    }
  ]
}

export default router
