import managementOfAchievement from '@/user/managementOfAchievement/managementOfAchievement'

const router = {
  path: '/managementOfAchievement',
  component: managementOfAchievement,
  children: [
    {
      path: '',
      name: 'Achievement1',
      component: resolve => require(['@/user/managementOfAchievement/page/Achievement'], resolve),
      meta: '成果转化'
    },
    {
      path: 'examineAndVerify',
      name: 'ExamineAndVerify',
      component: resolve => require(['@/user/managementOfAchievement/page/examineAndVerify'], resolve),
      meta: '成果审核'
    },
    {
      path: 'Patent',
      name: 'Patent',
      component: resolve => require(['@/user/managementOfAchievement/page/Patent'], resolve),
      meta: '发明专利'
    },
    {
      path: 'ApplicationTypeDetail',
      name: 'ApplicationTypeDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/ApplicationTypeDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'PrintingDetail',
      name: 'PrintingDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/PrintingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ApplyForAchievementsDetail',
      name: 'ApplyForAchievementsDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/ApplyForAchievementsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'IntroductoryLetterDetail',
      name: 'IntroductoryLetterDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/IntroductoryLetterDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'CostApplicationDetail',
      name: 'CostApplicationDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/CostApplicationDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'PublicationTypeDetail',
      name: 'PublicationTypeDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/PublicationTypeDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'RegistrationStatusDetail',
      name: 'RegistrationStatusDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatusDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'TechnologyAward',
      name: 'TechnologyAward',
      component: resolve => require(['@/user/managementOfAchievement/page/TechnologyAward'], resolve),
      meta: '科技奖励'
    },
    {
      path: 'AcademicPapers',
      name: 'AcademicPapers',
      component: resolve => require(['@/user/managementOfAchievement/page/AcademicPapers'], resolve),
      meta: '学术论文'
    },
    {
      path: 'BookPublishing',
      name: 'BookPublishing',
      component: resolve => require(['@/user/managementOfAchievement/page/BookPublishing'], resolve),
      meta: '著作出版'
    },
    {
      path: 'RegistrationStatueDetail',
      name: 'RegistrationStatueDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatueDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'RegistrationStatuesDetail',
      name: 'RegistrationStatuesDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/RegistrationStatuesDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'AwardRegistrationDetail',
      name: 'AwardRegistrationDetail',
      component: resolve => require(['@/user/managementOfAchievement/page/AwardRegistrationDetail'], resolve),
      meta: '查看详情'
    }
  ]
}

export default router
