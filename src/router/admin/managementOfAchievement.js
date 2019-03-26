import managementOfAchievement from '@/admin/managementOfAchievement/managementOfAchievement'

const router = {
  path: '/managementOfAchievement',
  name: 'ManagementOfAchievement',
  component: managementOfAchievement,
  children: [
    {
      path: '',
      name: 'Achievement',
      component: resolve => require(['@/admin/managementOfAchievement/page/achievement'], resolve),
      meta: '成果转化'
    },
    {
      path: 'examineAndVerify',
      name: 'ExamineAndVerify',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineAndVerify'], resolve),
      meta: '成果审核'
    },
    {
      path: 'patent',
      name: 'Patent',
      component: resolve => require(['@/admin/managementOfAchievement/page/patent'], resolve),
      meta: '发明专利'
    },
    {
      path: 'examinePatent',
      name: 'ExaminePatent',
      component: resolve => require(['@/admin/managementOfAchievement/page/examinePatent'], resolve),
      meta: '专利审核'
    },
    {
      path: 'watchDetail',
      name: 'WatchDetail',
      component: resolve => require(['@/admin/managementOfAchievement/page/watchDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'examineFunds',
      name: 'ExamineFunds',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineFunds'], resolve),
      meta: '专利审核'
    },
    {
      path: 'SAndTAchievements',
      name: 'SAndTAchievements',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTAchievements'], resolve),
      meta: '科技成果'
    },
    {
      path: 'auditResults',
      name: 'AuditResults',
      component: resolve => require(['@/admin/managementOfAchievement/page/auditResults'], resolve)
      // meta: '成果审核'
    },
    {
      path: 'SAndTRegistration',
      name: 'SAndTRegistration',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTRegistration'], resolve),
      meta: '成果审核'
    },
    {
      path: 'SAndTAward',
      name: 'SAndTAward',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTAward'], resolve),
      meta: '成果审核'
    },
    {
      path: 'AcademicPapers',
      name: 'AcademicPapers',
      component: resolve => require(['@/admin/managementOfAchievement/page/AcademicPapers'], resolve),
      meta: '学术论文'
    },
    {
      path: 'examineIntroductoryLetter',
      name: 'ExamineIntroductoryLetter',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineIntroductoryLetter'], resolve),
      meta: '介绍信审核'
    },
    {
      path: 'examineExpensesReimbursement',
      name: 'ExamineExpensesReimbursement',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineExpensesReimbursement'], resolve),
      meta: '经费报销审核'
    },
    {
      path: 'BookPublishing',
      name: 'BookPublishing',
      component: resolve => require(['@/admin/managementOfAchievement/page/BookPublishing'], resolve),
      meta: '著作出版'
    },
    {
      path: 'examinePublication',
      name: 'ExaminePublication',
      component: resolve => require(['@/admin/managementOfAchievement/page/examinePublication'], resolve),
      meta: '著作审核'
    },
    {
      path: 'examineRegistration',
      name: 'ExamineRegistration',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineRegistration'], resolve),
      meta: '登记审核'
    }
  ]
}

export default router
