import SecuritySupport from '@/user/SecuritySupport/SecuritySupport'

const router = {
  path: '/SecuritySupport',
  // name: 'SecuritySupport',
  component: SecuritySupport,
  children: [
    {
      path: '',
      name: 'SubjectInformation',
      component: resolve => require(['@/user/SecuritySupport/page/SubjectInformation'], resolve),
      meta: {
        title: '学科信息',
        requireAuth: true
      }
    },
    {
      path: 'SubjectBasicInformation',
      name: 'SubjectBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/page/SubjectBasicInformation'], resolve),
      meta: {
        title: '学科信息',
        requireAuth: true
      }
    },
    {
      path: 'BasicConditions',
      name: 'BasicConditions',
      component: resolve => require(['@/user/SecuritySupport/page/BasicConditions'], resolve),
      meta: {
        title: '学科信息',
        requireAuth: true
      }
    },
    {
      path: 'SubjectTechnicalTeam',
      name: 'SubjectTechnicalTeam',
      component: resolve => require(['@/user/SecuritySupport/page/SubjectTechnicalTeam'], resolve),
      meta: {
        title: '学科信息',
        requireAuth: true
      }
    },
    {
      path: 'ProjectBasicInformation',
      name: 'ProjectBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/components/ProjectBasicInformation'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      } // 待修改
    },
    {
      path: 'TalentInformation',
      name: 'TalentInformation',
      component: resolve => require(['@/user/SecuritySupport/page/TalentInformation'], resolve),
      meta: {
        title: '人才信息',
        requireAuth: true
      }
    },
    {
      path: 'TalentBasicInformation',
      name: 'TalentBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/components/TalentBasicInformation'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ResearchFunds',
      name: 'ResearchFunds',
      component: resolve => require(['@/user/SecuritySupport/page/ResearchFunds'], resolve),
      meta: {
        title: '科研经费',
        requireAuth: true
      }
    }
  ]
}

export default router
