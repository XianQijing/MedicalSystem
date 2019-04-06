import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/user/homePage/homePage'
import UserCenter from '@/user/userCenter/userCenter'
import Login from '@/page/login/index'
import Policy from '@/router/user/policy'
import Notic from '@/router/user/notic'
import scientificServing from '@/router/user/scientificServing'
import ManagementOfAchievement from '@/router/user/managementOfAchievement'
import FundManagement from '@/router/user/fundManagement'
import ItemsManagement from '@/router/user/ItemsManagement'
import ProjectManagement from '@/router/user/ProjectManagement'
import ScientificResearchTopic from '@/router/user/ScientificResearchTopic'
import SecuritySupport from '@/router/user/SecuritySupport'
import ElectronicArchives from '@/router/user/ElectronicArchives'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/user',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: '首页'
    },
    // 用户中心
    {
      path: '/UserCenter',
      component: UserCenter,
      children: [
        {
          path: '',
          name: 'UserMessage',
          component: resolve => require(['@/user/userCenter/userMessage/userMessage'], resolve),
          meta: '用户信息'
        },
        {
          path: 'credit',
          name: 'Credit',
          component: resolve => require(['@/user/userCenter/credit/credit'], resolve),
          meta: '继教学分'
        },
        // 用户中心的科研对标，与管理端公用页面
        {
          path: 'scientific/:from',
          name: 'Scientific',
          component: resolve => require(['@/page/userCenter/scientific/scientific'], resolve),
          meta: '科研对标'
        },
        {
          path: 'sociology',
          name: 'Sociology',
          component: resolve => require(['@/user/userCenter/sociology/sociology'], resolve),
          meta: '社会任职'
        },
        {
          path: 'achievement',
          name: 'Achievement',
          component: resolve => require(['@/user/userCenter/achievement/achievement'], resolve),
          meta: '用户业绩'
        },
        {
          path: 'resume',
          name: 'ResumeDetail',
          component: resolve => require(['@/page/userCenter/resume/resumeDetail'], resolve),
          meta: '学术简历'
        }
      ]
    },
    // 用户信息的详情页面，与管理端公用页面
    {
      path: '/creditDetail/:name',
      name: 'CreditDetail',
      component: resolve => require(['@/page/userCenter/creditDetail'], resolve),
      meta: '详情'
    },
    // 社会任职的任职详情、审核详情，与admin公用
    {
      path: '/reviewed/:from',
      name: 'Reviewed',
      component: resolve => require(['@/page/userCenter/reviewed'], resolve)
      // meta: '任职审核'
    },
    // 我的申报详情页
    {
      path: '/declareDetail',
      name: 'DeclareDetail',
      component: resolve => require(['@/page/userCenter/achievement/declareDetail'], resolve),
      meta: '我的申报'
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
    // 登录页面
    {
      path: '/Login',
      // name: 'Login',
      component: Login,
      children: [
        {
          path: 'register',
          name: 'Register',
          meta: '注册',
          component: resolve => require(['@/page/login/components/register'], resolve)
        },
        {
          path: 'forget',
          name: 'Rorget',
          meta: '修改密码',
          component: resolve => require(['@/page/login/components/forgetPassword'], resolve)
        },
        {
          path: '',
          name: 'Login',
          meta: '登陆',
          component: resolve => require(['@/page/login/components/login'], resolve)
        }
      ]
    },
    // 科研服务
    scientificServing,
    Policy,
    Notic,
    ManagementOfAchievement,
    FundManagement,
    ItemsManagement,
    ProjectManagement,
    ScientificResearchTopic,
    SecuritySupport,
    ElectronicArchives
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta
  next()
})
export default router
