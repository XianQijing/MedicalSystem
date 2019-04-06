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
      meta: '学科信息'
    },
    {
      path: 'SubjectBasicInformation',
      name: 'SubjectBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/page/SubjectBasicInformation'], resolve),
      meta: '学科信息'
    },
    {
      path: 'BasicConditions',
      name: 'BasicConditions',
      component: resolve => require(['@/user/SecuritySupport/page/BasicConditions'], resolve),
      meta: '学科信息'
    },
    {
      path: 'SubjectTechnicalTeam',
      name: 'SubjectTechnicalTeam',
      component: resolve => require(['@/user/SecuritySupport/page/SubjectTechnicalTeam'], resolve),
      meta: '学科信息'
    },
    {
      path: 'ProjectBasicInformation',
      name: 'ProjectBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/components/ProjectBasicInformation'], resolve),
      meta: '查看详情' // 待修改
    },
    {
      path: 'TalentInformation',
      name: 'TalentInformation',
      component: resolve => require(['@/user/SecuritySupport/page/TalentInformation'], resolve),
      meta: '人才信息'
    },
    {
      path: 'TalentBasicInformation',
      name: 'TalentBasicInformation',
      component: resolve => require(['@/user/SecuritySupport/components/TalentBasicInformation'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ResearchFunds',
      name: 'ResearchFunds',
      component: resolve => require(['@/user/SecuritySupport/page/ResearchFunds'], resolve),
      meta: '科研经费'
    }
  ]
}

export default router
