import SecuritySupport from '@/admin/SecuritySupport/SecuritySupport'

const router = {
  path: '/SecuritySupport',
  // name: 'SecuritySupport',
  component: SecuritySupport,
  children: [
    {
      path: '',
      name: 'ScientificTeam',
      component: resolve => require(['@/admin/SecuritySupport/page/ScientificTeam'], resolve),
      meta: '科研队伍'
    },
    {
      path: 'InformationAudit',
      name: 'InformationAudit',
      component: resolve => require(['@/admin/SecuritySupport/page/InformationAudit'], resolve),
      meta: '信息审核'
    },
    {
      path: 'KeyDisciplines',
      name: 'KeyDisciplines',
      component: resolve => require(['@/admin/SecuritySupport/page/KeyDisciplines'], resolve),
      meta: '重点学科'
    },
    {
      path: 'KeyDisciplinesExamine',
      name: 'KeyDisciplinesExamine',
      component: resolve => require(['@/admin/SecuritySupport/page/KeyDisciplinesExamine'], resolve),
      meta: '信息审核'
    },
    {
      path: 'ResearchFunds',
      name: 'ResearchFunds',
      component: resolve => require(['@/admin/SecuritySupport/page/ResearchFunds'], resolve),
      meta: '科研经费'
    }
  ]
}

export default router
