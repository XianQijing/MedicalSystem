import EvaluationDecision from '@/page/EvaluationDecision/EvaluationDecision'

const router = {
  path: '/EvaluationDecision',
  component: EvaluationDecision,
  children: [
    {
      path: '',
      name: 'InfluenceList',
      component: resolve => require(['@/page/EvaluationDecision/page/InfluenceList'], resolve),
      meta: '影响力表'
    },
    {
      path: 'ScientificResearchPerformance',
      name: 'ScientificResearchPerformance',
      component: resolve => require(['@/page/EvaluationDecision/page/ScientificResearchPerformance'], resolve),
      meta: '科研绩效'
    },
    {
      path: 'PerformanceDetail',
      name: 'PerformanceDetail',
      component: resolve => require(['@/page/EvaluationDecision/page/PerformanceDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'InfluenceListDetail',
      name: 'InfluenceListDetail',
      component: resolve => require(['@/page/EvaluationDecision/page/InfluenceListDetail'], resolve),
      meta: '查看详情'
    }
  ]
}

export default router
