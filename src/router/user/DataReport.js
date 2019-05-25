import Layout from '@/layout/layout'

const router = {
  path: '/DataReport',
  component: Layout,
  children: [
    {
      path: '',
      name: 'DataSearch',
      component: resolve => require(['@/page/DataReport/DataSearch/DataSearch'], resolve),
      meta: {
        title: '数据查询',
        requireAuth: true
      }
    },
    {
      path: 'VerticalContrast',
      name: 'VerticalContrast',
      component: resolve => require(['@/page/DataReport/VerticalContrast/VerticalContrast'], resolve),
      meta: {
        title: '纵向对比',
        requireAuth: true
      }
    },
    {
      path: 'HorizontalContrast',
      name: 'HorizontalContrast',
      component: resolve => require(['@/page/DataReport/HorizontalContrast/HorizontalContrast'], resolve),
      meta: {
        title: '横向对比',
        requireAuth: true
      }
    },
    {
      path: 'HorizontalDetail',
      name: 'HorizontalDetail',
      component: resolve => require(['@/page/DataReport/HorizontalContrast/HorizontalDetail'], resolve),
      meta: {
        title: '横向对比',
        requireAuth: true
      }
    },
    {
      path: 'ScientificResearchReport',
      name: 'ScientificResearchReport',
      component: resolve => require(['@/page/DataReport/ScientificResearchReport/ScientificResearchReport'], resolve),
      meta: {
        title: '科研报表',
        requireAuth: true
      }
    }
  ]
}

export default router
