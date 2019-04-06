import ScientificResearchTopic from '@/user/ScientificResearchTopic/ScientificResearchTopic'

const router = {
  path: '/ScientificResearchTopic',
  // name: 'ScientificResearchTopic',
  component: ScientificResearchTopic,
  children: [
    {
      path: '',
      name: 'ProjectSettings',
      component: resolve => require(['@/user/ScientificResearchTopic/page/ProjectSettings'], resolve),
      meta: '课题指南'
    },
    {
      path: 'GuideRelease',
      name: 'GuideRelease',
      component: resolve => require(['@/user/ScientificResearchTopic/page/GuideRelease'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectDeclaration',
      name: 'ProjectDeclaration',
      component: resolve => require(['@/user/ScientificResearchTopic/page/ProjectDeclaration'], resolve),
      meta: '课题申报'
    },
    {
      path: 'ReviewManagement',
      name: 'ReviewManagement',
      component: resolve => require(['@/user/ScientificResearchTopic/page/ReviewManagement'], resolve),
      meta: '评审进程'
    },
    {
      path: 'DirectAssessment',
      name: 'DirectAssessment',
      component: resolve => require(['@/user/ScientificResearchTopic/page/DirectAssessment'], resolve),
      meta: '直接评审'
    },
    {
      path: 'PreliminaryAssessment',
      name: 'PreliminaryAssessment',
      component: resolve => require(['@/user/ScientificResearchTopic/page/PreliminaryAssessment'], resolve),
      meta: '课题初评'
    },
    {
      path: 'TopicListDetail',
      name: 'TopicListDetail',
      component: resolve => require(['@/user/ScientificResearchTopic/page/TopicListDetail'], resolve),
      meta: '查看详情'
    }
  ]
}

export default router
