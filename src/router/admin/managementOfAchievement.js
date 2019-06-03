import Layout from '@/layout/layout'

const router = {
  path: '/ManagementOfAchievement',
  // name: 'ManagementOfAchievement',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Achievement1',
      component: resolve => require(['@/admin/managementOfAchievement/page/achievement'], resolve),
      meta: {
        title: '成果转化',
        requireAuth: true
      }
    },
    {
      path: 'examineAndVerify',
      name: 'ExamineAndVerify',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineAndVerify'], resolve),
      meta: {
        title: '成果审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'patent',
      name: 'Patent',
      component: resolve => require(['@/admin/managementOfAchievement/page/patent'], resolve),
      meta: {
        title: '发明专利',
        requireAuth: true
      }
    },
    {
      path: 'examinePatent',
      name: 'ExaminePatent',
      component: resolve => require(['@/admin/managementOfAchievement/page/examinePatent'], resolve),
      meta: {
        title: '专利审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'watchDetail',
      name: 'WatchDetail',
      component: resolve => require(['@/admin/managementOfAchievement/page/watchDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'examineFunds',
      name: 'ExamineFunds',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineFunds'], resolve),
      meta: {
        title: '专利审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'SAndTAchievements',
      name: 'SAndTAchievements',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTAchievements'], resolve),
      meta: {
        title: '科技成果',
        requireAuth: true
      }
    },
    {
      path: 'auditResults',
      name: 'AuditResults',
      component: resolve => require(['@/admin/managementOfAchievement/page/auditResults'], resolve),
      meta: {
        title: '',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'SAndTRegistration',
      name: 'SAndTRegistration',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTRegistration'], resolve),
      meta: {
        title: '成果审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'SAndTAward',
      name: 'SAndTAward',
      component: resolve => require(['@/admin/managementOfAchievement/page/SAndTAward'], resolve),
      meta: {
        title: '成果审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'AcademicPapers',
      name: 'AcademicPapers',
      component: resolve => require(['@/admin/managementOfAchievement/page/AcademicPapers'], resolve),
      meta: {
        title: '学术论文',
        requireAuth: true
      }
    },
    {
      path: 'examineIntroductoryLetter',
      name: 'ExamineIntroductoryLetter',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineIntroductoryLetter'], resolve),
      meta: {
        title: '介绍信审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'examineExpensesReimbursement',
      name: 'ExamineExpensesReimbursement',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineExpensesReimbursement'], resolve),
      meta: {
        title: '经费报销审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BookPublishing',
      name: 'BookPublishing',
      component: resolve => require(['@/admin/managementOfAchievement/page/BookPublishing'], resolve),
      meta: {
        title: '著作出版',
        requireAuth: true
      }
    },
    {
      path: 'examinePublication',
      name: 'ExaminePublication',
      component: resolve => require(['@/admin/managementOfAchievement/page/examinePublication'], resolve),
      meta: {
        title: '著作审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'examineRegistration',
      name: 'ExamineRegistration',
      component: resolve => require(['@/admin/managementOfAchievement/page/examineRegistration'], resolve),
      meta: {
        title: '登记审核',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
