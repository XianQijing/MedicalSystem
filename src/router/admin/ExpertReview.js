import ExpertReview from '@/admin/ExpertReview/ExpertReview'

const router = {
  path: '/ExpertReview',
  component: ExpertReview,
  children: [
    {
      path: '',
      name: 'ScientificResearchTopic2',
      component: resolve => require(['@/admin/ExpertReview/ScientificResearchTopic/ScientificResearchTopic'], resolve),
      meta: {
        title: '科研课题',
        requireAuth: true
      }
    },
    {
      path: 'ScientificDetail',
      name: 'ScientificDetail',
      component: resolve => require(['@/admin/ExpertReview/ScientificResearchTopic/ScientificDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ScoreSheet',
      name: 'ScoreSheet',
      component: resolve => require(['@/admin/ExpertReview/ScoreSheet'], resolve),
      meta: {
        title: '评分表打分',
        requireAuth: true
      }
    },
    {
      path: 'Result',
      name: 'Result',
      component: resolve => require(['@/admin/ExpertReview/Result'], resolve),
      meta: {
        title: '提交结果',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineConstruction',
      name: 'DisciplineConstruction',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: {
        title: '学科建设',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineDetail',
      name: 'DisciplineDetail',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'personnelTraining',
      name: 'personnelTraining',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: {
        title: '人才培养',
        requireAuth: true
      }
    },
    {
      path: 'TechnologyAward',
      name: 'TechnologyAward',
      component: resolve => require(['@/admin/ExpertReview/DisciplineConstruction/DisciplineConstruction'], resolve),
      meta: {
        title: '科技奖励',
        requireAuth: true
      }
    },
    {
      path: 'ProjectManagement',
      name: 'ProjectManagement1',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/ProjectManagement'], resolve),
      meta: {
        title: '项目管理',
        requireAuth: true
      }
    },
    {
      path: 'ProjectDetail',
      name: 'ProjectDetail1',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/ProjectDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'IdentificationDetail',
      name: 'IdentificationDetail',
      component: resolve => require(['@/admin/ExpertReview/ProjectManagement/IdentificationDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    }
  ]
}

export default router
