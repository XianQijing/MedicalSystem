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
      meta: {
        title: '课题指南',
        requireAuth: true
      }
    },
    {
      path: 'GuideRelease',
      name: 'GuideRelease',
      component: resolve => require(['@/user/ScientificResearchTopic/page/GuideRelease'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ProjectDeclaration',
      name: 'ProjectDeclaration',
      component: resolve => require(['@/user/ScientificResearchTopic/page/ProjectDeclaration'], resolve),
      meta: {
        title: '课题申报',
        requireAuth: true
      }
    },
    {
      path: 'ReviewManagement',
      name: 'ReviewManagement',
      component: resolve => require(['@/user/ScientificResearchTopic/page/ReviewManagement'], resolve),
      meta: {
        title: '评审进程',
        requireAuth: true
      }
    },
    {
      path: 'DirectAssessment',
      name: 'DirectAssessment',
      component: resolve => require(['@/user/ScientificResearchTopic/page/DirectAssessment'], resolve),
      meta: {
        title: '直接评审',
        requireAuth: true
      }
    },
    {
      path: 'PreliminaryAssessment',
      name: 'PreliminaryAssessment',
      component: resolve => require(['@/user/ScientificResearchTopic/page/PreliminaryAssessment'], resolve),
      meta: {
        title: '课题初评',
        requireAuth: true
      }
    },
    {
      path: 'TopicListDetail',
      name: 'TopicListDetail',
      component: resolve => require(['@/user/ScientificResearchTopic/page/TopicListDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    }
  ]
}

export default router
