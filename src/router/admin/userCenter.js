import Layout from '@/layout/layout'

const router = [
  {
    path: '/UserCenter',
    // name: 'UserCenter',
    component: Layout,
    children: [
      {
        path: '',
        name: 'UserMessage',
        component: resolve => require(['@/admin/userCenter/userMessage/userMessage'], resolve),
        meta: {
          title: '用户信息',
          requireAuth: true
        }
      },
      {
        path: 'editPersonalMessage',
        name: 'EditPersonalMessage',
        component: resolve => require(['@/admin/userCenter/userMessage/editPersonalMessage'], resolve),
        meta: {
          title: '信息修改',
          requireAuth: true,
          hideInMenu: true
        }
      },
      {
        path: 'achievement',
        name: 'Achievement',
        component: resolve => require(['@/admin/userCenter/achievement/achievement'], resolve),
        meta: {
          title: '用户业绩',
          requireAuth: true
        }
      },
      {
        path: 'credit',
        name: 'Credit',
        component: resolve => require(['@/admin/userCenter/credit/credit'], resolve),
        meta: {
          title: '继续学分',
          requireAuth: true
        }
      },
      // 用户中心的科研对标，与管理端公用页面
      {
        path: 'scientific/:from',
        name: 'Scientific',
        component: resolve => require(['@/page/userCenter/scientific/scientific'], resolve),
        meta: {
          title: '科研对标',
          requireAuth: true
        }
      },
      // 修改密码
      {
        path: 'changePassword',
        name: 'ChangePassword',
        component: resolve => require(['@/admin/userCenter/changePassword/changePassword'], resolve),
        meta: {
          title: '修改密码',
          requireAuth: true
        }
      },
      {
        path: 'sociology',
        name: 'Sociology',
        component: resolve => require(['@/admin/userCenter/sociology/sociology'], resolve),
        meta: {
          title: '社会任职',
          requireAuth: true
        }
      },
      {
        path: 'resume',
        name: 'Resume',
        component: resolve => require(['@/page/userCenter/resume/resume'], resolve),
        meta: {
          title: '学术简历',
          requireAuth: true
        }
      }
    ]
    // meta: '用户中心'
  },
  {
    path: '/creditDetail/:name',
    name: 'CreditDetail',
    component: resolve => require(['@/page/userCenter/creditDetail'], resolve),
    meta: {
      title: '详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/continueDetail',
    name: 'ContinueDetail',
    component: resolve => require(['@/admin/userCenter/credit/continueDetail'], resolve),
    meta: {
      title: '审核详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/reviewed/:from',
    name: 'Reviewed',
    component: resolve => require(['@/page/userCenter/reviewed'], resolve),
    meta: {
      requireAuth: true,
      hideInMenu: true
    }
    // meta: '任职审核'
  },
  // 用户业绩
  {
    path: '/myDeclare',
    name: 'MyDeclare',
    component: resolve => require(['@/page/userCenter/achievement/myDeclare'], resolve),
    meta: {
      title: '我的申报',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myProject',
    name: 'MyProject',
    component: resolve => require(['@/page/userCenter/achievement/myProject'], resolve),
    meta: {
      title: '我的项目',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myPaper',
    name: 'MyPaper',
    component: resolve => require(['@/page/userCenter/achievement/myPaper'], resolve),
    meta: {
      title: '我的论文',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myFunds',
    name: 'MyFunds',
    component: resolve => require(['@/page/userCenter/achievement/myFunds'], resolve),
    meta: {
      title: '我的经费',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myMeeting',
    name: 'MyMeeting',
    component: resolve => require(['@/page/userCenter/achievement/myMeeting'], resolve),
    meta: {
      title: '我的会议',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myPatent',
    name: 'MyPatent',
    component: resolve => require(['@/page/userCenter/achievement/myPatent'], resolve),
    meta: {
      title: '我的专利',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myAchievement',
    name: 'MyAchievement',
    component: resolve => require(['@/page/userCenter/achievement/myAchievement'], resolve),
    meta: {
      title: '我的成果',
      requireAuth: true
    }
  },
  {
    path: '/myReward',
    name: 'MyReward',
    component: resolve => require(['@/page/userCenter/achievement/myReward'], resolve),
    meta: {
      title: '我的奖励',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myWrite',
    name: 'MyWrite',
    component: resolve => require(['@/page/userCenter/achievement/myWrite'], resolve),
    meta: {
      title: '我的著作',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myServing',
    name: 'MyServing',
    component: resolve => require(['@/page/userCenter/achievement/myServing'], resolve),
    meta: {
      title: '我的任职',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/myActivity',
    name: 'MyActivity',
    component: resolve => require(['@/page/userCenter/achievement/myActivity'], resolve),
    meta: {
      title: '我的活动',
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 我的申报详情页
  {
    path: '/declareDetail',
    name: 'DeclareDetail',
    component: resolve => require(['@/page/userCenter/achievement/declareDetail'], resolve),
    meta: {
      title: '申报详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 我的申请--标书预览||附件预览
  {
    path: '/preview/:from',
    name: 'Preview',
    component: resolve => require(['@/page/userCenter/achievement/preview'], resolve),
    meta: {
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 我的经费--详情
  {
    path: '/myFundsDetail',
    name: 'MyFundsDetail',
    component: resolve => require(['@/page/userCenter/achievement/myFundsDetail'], resolve),
    meta: {
      title: '经费详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 我的论文--详情
  {
    path: '/paperDetail',
    name: 'PaperDetail',
    component: resolve => require(['@/page/userCenter/achievement/paperDetail'], resolve),
    meta: {
      title: '论文详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 我的会议--详情
  {
    path: '/meetingDetail',
    name: 'MeetingDetail',
    component: resolve => require(['@/page/userCenter/achievement/meetingDetail'], resolve),
    meta: {
      title: '会议详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/patentDetail',
    name: 'PatentDetail',
    component: resolve => require(['@/page/userCenter/achievement/patentDetail'], resolve),
    meta: {
      title: '专利详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/achievementDetail',
    name: 'AchievementDetail',
    component: resolve => require(['@/page/userCenter/achievement/achievementDetail'], resolve),
    meta: {
      title: '成果详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/rewardDetail',
    name: 'RewardDetail',
    component: resolve => require(['@/page/userCenter/achievement/rewardDetail'], resolve),
    meta: {
      title: '奖励详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/writingsDetail',
    name: 'WritingsDetail',
    component: resolve => require(['@/page/userCenter/achievement/writingsDetail'], resolve),
    meta: {
      title: '著作详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/servingDetail',
    name: 'ServingDetail',
    component: resolve => require(['@/page/userCenter/achievement/servingDetail'], resolve),
    meta: {
      title: '任职详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  {
    path: '/activityDetail',
    name: 'ActivityDetail',
    component: resolve => require(['@/page/userCenter/achievement/activityDetail'], resolve),
    meta: {
      title: '活动详情',
      requireAuth: true,
      hideInMenu: true
    }
  },
  // 简历详情
  {
    path: '/resumeDetail',
    name: 'ResumeDetail',
    component: resolve => require(['@/page/userCenter/resume/resumeDetail'], resolve),
    meta: {
      title: '简历详情',
      requireAuth: true,
      hideInMenu: true
    }
  }
]

export default router
