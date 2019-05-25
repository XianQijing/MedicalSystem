import Layout from '@/layout/layout'

const router = {
  path: '/EvaluationDecision',
  component: Layout,
  children: [
    {
      path: '',
      name: 'InfluenceList',
      component: resolve => require(['@/page/EvaluationDecision/page/InfluenceList'], resolve),
      meta: {
        title: '影响力表',
        requireAuth: true
      }
    },
    {
      path: 'ScientificResearchPerformance',
      name: 'ScientificResearchPerformance',
      component: resolve => require(['@/page/EvaluationDecision/page/ScientificResearchPerformance'], resolve),
      meta: {
        title: '科研绩效',
        requireAuth: true
      }
    },
    {
      path: 'PerformanceDetail',
      name: 'PerformanceDetail',
      component: resolve => require(['@/page/EvaluationDecision/page/PerformanceDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'InfluenceListDetail',
      name: 'InfluenceListDetail',
      component: resolve => require(['@/page/EvaluationDecision/page/InfluenceListDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
