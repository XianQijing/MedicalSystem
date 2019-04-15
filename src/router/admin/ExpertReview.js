import ExpertReview from '@/admin/ExpertReview/ExpertReview'

const router = {
  path: '/ExpertReview',
  component: ExpertReview,
  children: [
    {
      path: '',
      name: 'ScientificResearchTopic2',
      component: resolve => require(['@/admin/ExpertReview/ScientificResearchTopic/ScientificResearchTopic'], resolve),
      meta: '科研课题'
    },
    {
      path: 'ScientificDetail',
      name: 'ScientificDetail',
      component: resolve => require(['@/admin/ExpertReview/ScientificResearchTopic/ScientificDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ScoreSheet',
      name: 'ScoreSheet',
      component: resolve => require(['@/admin/ExpertReview/ScoreSheet'], resolve),
      meta: '评分表打分'
    },
    {
      path: 'Result',
      name: 'Result',
      component: resolve => require(['@/admin/ExpertReview/Result'], resolve),
      meta: '提交结果'
    },
    {
      path: 'DisciplineConstruction',
      name: 'DisciplineConstruction',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: '学科建设'
    },
    {
      path: 'DisciplineDetail',
      name: 'DisciplineDetail',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'personnelTraining',
      name: 'personnelTraining',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: '人才培养'
    },
    {
      path: 'TechnologyAward',
      name: 'TechnologyAward',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: '科技奖励'
    },
    {
      path: 'ProjectManagement',
      name: 'ProjectManagement1',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/ProjectManagement'], resolve),
      meta: '项目管理'
    },
    {
      path: 'ProjectDetail',
      name: 'ProjectDetail1',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/ProjectDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'IdentificationDetail',
      name: 'IdentificationDetail',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/IdentificationDetail'], resolve),
      meta: '查看详情'
    }
  ]
}

export default router
