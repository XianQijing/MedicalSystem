import UserCenter from '@/admin/userCenter/userCenter'

const router = [
  {
    path: '/UserCenter',
    name: 'UserCenter',
    component: UserCenter,
    children: [
      {
        path: '',
        name: 'UserMessage',
        component: resolve => require(['@/admin/userCenter/userMessage/userMessage'], resolve),
        meta: '用户信息'
      },
      {
        path: 'editPersonalMessage',
        name: 'EditPersonalMessage',
        component: resolve => require(['@/admin/userCenter/userMessage/editPersonalMessage'], resolve),
        meta: '信息修改'
      },
      {
        path: 'achievement',
        name: 'Achievement',
        component: resolve => require(['@/admin/userCenter/achievement/achievement'], resolve),
        meta: '用户业绩'
      },
      {
        path: 'credit',
        name: 'Credit',
        component: resolve => require(['@/admin/userCenter/credit/credit'], resolve),
        meta: '继续学分'
      },
      // 用户中心的科研对标，与管理端公用页面
      {
        path: 'scientific/:from',
        name: 'Scientific',
        component: resolve => require(['@/page/userCenter/scientific/scientific'], resolve),
        meta: '科研对标'
      },
      // 修改密码
      {
        path: 'changePassword',
        name: 'ChangePassword',
        component: resolve => require(['@/admin/userCenter/changePassword/changePassword'], resolve),
        meta: '修改密码'
      },
      {
        path: 'sociology',
        name: 'Sociology',
        component: resolve => require(['@/admin/userCenter/sociology/sociology'], resolve),
        meta: '社会任职'
      },
      {
        path: 'resume',
        name: 'Resume',
        component: resolve => require(['@/page/userCenter/resume/resume'], resolve),
        meta: '学术简历'
      }
    ]
    // meta: '用户中心'
  },
  {
    path: '/creditDetail/:name',
    name: 'CreditDetail',
    component: resolve => require(['@/page/userCenter/creditDetail'], resolve),
    meta: '详情'
  },
  {
    path: '/continueDetail',
    name: 'ContinueDetail',
    component: resolve => require(['@/admin/userCenter/credit/continueDetail'], resolve),
    meta: '审核详情'
  },
  {
    path: '/reviewed/:from',
    name: 'Reviewed',
    component: resolve => require(['@/page/userCenter/reviewed'], resolve)
    // meta: '任职审核'
  },
  // 用户业绩
  {
    path: '/myDeclare',
    name: 'MyDeclare',
    component: resolve => require(['@/page/userCenter/achievement/myDeclare'], resolve),
    meta: '我的申报'
  },
  {
    path: '/myProject',
    name: 'MyProject',
    component: resolve => require(['@/page/userCenter/achievement/myProject'], resolve),
    meta: '我的项目'
  },
  {
    path: '/myPaper',
    name: 'MyPaper',
    component: resolve => require(['@/page/userCenter/achievement/myPaper'], resolve),
    meta: '我的论文'
  },
  {
    path: '/myFunds',
    name: 'MyFunds',
    component: resolve => require(['@/page/userCenter/achievement/myFunds'], resolve),
    meta: '我的经费'
  },
  {
    path: '/myMeeting',
    name: 'MyMeeting',
    component: resolve => require(['@/page/userCenter/achievement/myMeeting'], resolve),
    meta: '我的会议'
  },
  {
    path: '/myPatent',
    name: 'MyPatent',
    component: resolve => require(['@/page/userCenter/achievement/myPatent'], resolve),
    meta: '我的专利'
  },
  {
    path: '/myAchievement',
    name: 'MyAchievement',
    component: resolve => require(['@/page/userCenter/achievement/myAchievement'], resolve),
    meta: '我的成果'
  },
  {
    path: '/myReward',
    name: 'MyReward',
    component: resolve => require(['@/page/userCenter/achievement/myReward'], resolve),
    meta: '我的奖励'
  },
  {
    path: '/myWrite',
    name: 'MyWrite',
    component: resolve => require(['@/page/userCenter/achievement/myWrite'], resolve),
    meta: '我的著作'
  },
  {
    path: '/myServing',
    name: 'MyServing',
    component: resolve => require(['@/page/userCenter/achievement/myServing'], resolve),
    meta: '我的任职'
  },
  {
    path: '/myActivity',
    name: 'MyActivity',
    component: resolve => require(['@/page/userCenter/achievement/myActivity'], resolve),
    meta: '我的活动'
  },
  // 我的申报详情页
  {
    path: '/declareDetail',
    name: 'DeclareDetail',
    component: resolve => require(['@/page/userCenter/achievement/declareDetail'], resolve),
    meta: '申报详情'
  },
  // 我的申请--标书预览||附件预览
  {
    path: '/preview/:from',
    name: 'Preview',
    component: resolve => require(['@/page/userCenter/achievement/preview'], resolve)
  },
  // 我的经费--详情
  {
    path: '/myFundsDetail',
    name: 'MyFundsDetail',
    component: resolve => require(['@/page/userCenter/achievement/myFundsDetail'], resolve),
    meta: '经费详情'
  },
  // 我的论文--详情
  {
    path: '/paperDetail',
    name: 'PaperDetail',
    component: resolve => require(['@/page/userCenter/achievement/paperDetail'], resolve),
    meta: '论文详情'
  },
  // 我的会议--详情
  {
    path: '/meetingDetail',
    name: 'MeetingDetail',
    component: resolve => require(['@/page/userCenter/achievement/meetingDetail'], resolve),
    meta: '会议详情'
  },
  {
    path: '/patentDetail',
    name: 'PatentDetail',
    component: resolve => require(['@/page/userCenter/achievement/patentDetail'], resolve),
    meta: '专利详情'
  },
  {
    path: '/achievementDetail',
    name: 'AchievementDetail',
    component: resolve => require(['@/page/userCenter/achievement/achievementDetail'], resolve),
    meta: '成果详情'
  },
  {
    path: '/rewardDetail',
    name: 'RewardDetail',
    component: resolve => require(['@/page/userCenter/achievement/rewardDetail'], resolve),
    meta: '奖励详情'
  },
  {
    path: '/writingsDetail',
    name: 'WritingsDetail',
    component: resolve => require(['@/page/userCenter/achievement/writingsDetail'], resolve),
    meta: '著作详情'
  },
  {
    path: '/servingDetail',
    name: 'ServingDetail',
    component: resolve => require(['@/page/userCenter/achievement/servingDetail'], resolve),
    meta: '任职详情'
  },
  {
    path: '/activityDetail',
    name: 'ActivityDetail',
    component: resolve => require(['@/page/userCenter/achievement/activityDetail'], resolve),
    meta: '活动详情'
  },
  // 简历详情
  {
    path: '/resumeDetail',
    name: 'ResumeDetail',
    component: resolve => require(['@/page/userCenter/resume/resumeDetail'], resolve),
    meta: '简历详情'
  }
]

export default router
