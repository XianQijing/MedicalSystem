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
      meta: {
        title: '科研队伍',
        requireAuth: true
      }
    },
    {
      path: 'InformationAudit',
      name: 'InformationAudit',
      component: resolve => require(['@/admin/SecuritySupport/page/InformationAudit'], resolve),
      meta: {
        title: '信息审核',
        requireAuth: true
      }
    },
    {
      path: 'KeyDisciplines',
      name: 'KeyDisciplines',
      component: resolve => require(['@/admin/SecuritySupport/page/KeyDisciplines'], resolve),
      meta: {
        title: '重点学科',
        requireAuth: true
      }
    },
    {
      path: 'KeyDisciplinesExamine',
      name: 'KeyDisciplinesExamine',
      component: resolve => require(['@/admin/SecuritySupport/page/KeyDisciplinesExamine'], resolve),
      meta: {
        title: '信息审核',
        requireAuth: true
      }
    },
    {
      path: 'ResearchFunds',
      name: 'ResearchFunds',
      component: resolve => require(['@/admin/SecuritySupport/page/ResearchFunds'], resolve),
      meta: {
        title: '科研经费',
        requireAuth: true
      }
    }
  ]
}

export default router
