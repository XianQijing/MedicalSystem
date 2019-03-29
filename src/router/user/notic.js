import Notic from '@/page/notic/notic'

const router = {
  path: '/notic',
  component: Notic,
  children: [
    {
      path: '',
      name: 'NoticList',
      component: resolve => require(['@/user/notic/noticList'], resolve),
      meta: '通知公告'
    },
    {
      path: 'reviews',
      name: 'Reviews',
      component: resolve => require(['@/user/notic/reviews'], resolve),
      meta: '文件预览'
    }
  ]
}

export default router
