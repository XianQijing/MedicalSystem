import DataReport from '@/page/DataReport/DataReport'

const router = {
  path: '/DataReport',
  component: DataReport,
  children: [
    {
      path: '',
      name: 'DataSearch',
      component: resolve => require(['@/page/DataReport/DataSearch/DataSearch'], resolve),
      meta: '数据查询'
    },
    {
      path: 'VerticalContrast',
      name: 'VerticalContrast',
      component: resolve => require(['@/page/DataReport/VerticalContrast/VerticalContrast'], resolve),
      meta: '纵向对比'
    },
    {
      path: 'HorizontalContrast',
      name: 'HorizontalContrast',
      component: resolve => require(['@/page/DataReport/HorizontalContrast/HorizontalContrast'], resolve),
      meta: '横向对比'
    },
    {
      path: 'HorizontalDetail',
      name: 'HorizontalDetail',
      component: resolve => require(['@/page/DataReport/HorizontalContrast/HorizontalDetail'], resolve),
      meta: '横向对比'
    },
    {
      path: 'ScientificResearchReport',
      name: 'ScientificResearchReport',
      component: resolve => require(['@/page/DataReport/ScientificResearchReport/ScientificResearchReport'], resolve),
      meta: '科研报表'
    }
  ]
}

export default router
