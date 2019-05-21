import DisciplineBase from '@/user/DisciplineBase/DisciplineBase'

const router = {
  path: '/DisciplineBase',
  // name: 'ScientificResearchTopic',
  component: DisciplineBase,
  children: [
    {
      path: '',
      name: 'DisciplineGuide',
      component: resolve => require(['@/user/DisciplineBase/DisciplineGuide/DisciplineGuide'], resolve),
      meta: {
        title: '学科指南',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineDeclaration',
      name: 'DisciplineDeclaration',
      component: resolve => require(['@/user/DisciplineBase/DisciplineDeclaration/DisciplineDeclaration'], resolve),
      meta: {
        title: '学科申报',
        requireAuth: true
      }
    },
    {
      path: 'open',
      name: 'open',
      component: resolve => require(['@/user/DisciplineBase/DisciplineDeclaration/page/open'], resolve),
      meta: {
        title: '申报开放',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineProcess',
      name: 'DisciplineProcess',
      component: resolve => require(['@/user/ScientificResearchTopic/page/DirectAssessment'], resolve),
      meta: {
        title: '评审进程',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineReview',
      name: 'DisciplineReview',
      component: resolve => require(['@/user/DisciplineBase/DisciplineReview/DisciplineReview'], resolve),
      meta: {
        title: '初评评审',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineDetail',
      name: 'DisciplineDetail',
      component: resolve => require(['@/user/DisciplineBase/DisciplineReview/page/watchDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'DisciplineResult',
      name: 'DisciplineResult',
      component: resolve => require(['@/user/DisciplineBase/DisciplineResult/DisciplineResult'], resolve),
      meta: {
        title: '评审结果',
        requireAuth: true
      }
    }
  ]
}

export default router
