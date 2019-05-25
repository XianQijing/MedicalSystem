import Layout from '@/layout/layout'

const router = {
  path: '/notic',
  component: Layout,
  children: [
    {
      path: '',
      name: 'NoticList',
      component: resolve => require(['@/user/notic/noticList'], resolve),
      meta: {
        title: '通知公告',
        requireAuth: true
      }
    },
    {
      path: 'reviews',
      name: 'Reviews',
      component: resolve => require(['@/user/notic/reviews'], resolve),
      meta: {
        title: '文件预览',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
