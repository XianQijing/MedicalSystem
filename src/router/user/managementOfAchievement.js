import Layout from '@/layout/layout'

const router = {
  path: '/ManagementOfAchievement',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Achievement1',
      component: resolve => require(['@/user/managementOfAchievement/page/Achievement'], resolve),
      meta: {
        title: '成果转化',
        requireAuth: true
      }
    },
    {
      path: 'examineAndVerify',
      name: 'ExamineAndVerify',
      component: resolve => require(['@/user/managementOfAchievement/page/examineAndVerify'], resolve),
      meta: {
        title: '成果审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Patent',
      name: 'Patent',
      component: resolve => require(['@/user/managementOfAchievement/page/Patent'], resolve),
      meta: {
        title: '发明专利',
        requireAuth: true
      }
    },
    {
      path: 'ApplicationTypeDetail',
      name: 'ApplicationTypeDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/ApplicationTypeDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'PrintingDetail',
      name: 'PrintingDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/PrintingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ApplyForAchievementsDetail',
      name: 'ApplyForAchievementsDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/ApplyForAchievementsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'IntroductoryLetterDetail',
      name: 'IntroductoryLetterDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/IntroductoryLetterDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'CostApplicationDetail',
      name: 'CostApplicationDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/CostApplicationDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'PublicationTypeDetail',
      name: 'PublicationTypeDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/PublicationTypeDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'RegistrationStatusDetail',
      name: 'RegistrationStatusDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatusDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'TechnologyAward',
      name: 'TechnologyAward',
      component: resolve => require(['@/user/managementOfAchievement/page/TechnologyAward'], resolve),
      meta: {
        title: '科技奖励',
        requireAuth: true
      }
    },
    {
      path: 'AcademicPapers',
      name: 'AcademicPapers',
      component: resolve => require(['@/user/managementOfAchievement/page/AcademicPapers'], resolve),
      meta: {
        title: '学术论文',
        requireAuth: true
      }
    },
    {
      path: 'BookPublishing',
      name: 'BookPublishing',
      component: resolve => require(['@/user/managementOfAchievement/page/BookPublishing'], resolve),
      meta: {
        title: '著作出版',
        requireAuth: true
      }
    },
    {
      path: 'RegistrationStatueDetail',
      name: 'RegistrationStatueDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatueDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'RegistrationStatuesDetail',
      name: 'RegistrationStatuesDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatuesDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'AwardRegistrationDetail',
      name: 'AwardRegistrationDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/AwardRegistrationDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
