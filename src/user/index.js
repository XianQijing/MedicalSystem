import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/user'
import HomePage from '@/user/homePage/homePage'
// import UserCenter from '@/user/userCenter/userCenter'
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
import EvaluationDecision from '@/router/user/EvaluationDecision'
import DataReport from '@/router/user/DataReport'
import DisciplineBase from '@/router/user/DisciplineBase'
import TalentPlan from '@/router/user/TalentPlan'
import Layout from '@/layout/layout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/user',
  routes: [
    // 登录页面
    {
      path: '/Login',
      // name: 'Login',
      component: Login,
      children: [
        {
          path: 'register',
          name: 'Register',
          meta: {
            title: '注册'
          },
          component: resolve => require(['@/page/login/components/register'], resolve)
        },
        {
          path: 'forget',
          name: 'Rorget',
          meta: {
            title: '修改密码'
          },
          component: resolve => require(['@/page/login/components/forgetPassword'], resolve)
        },
        {
          path: '',
          name: 'Login',
          meta: {
            title: '登陆'
          },
          component: resolve => require(['@/page/login/components/login'], resolve)
        }
      ]
    },
    {
      path: '',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '首页',
        requireAuth: true
      }
    },
    // 用户中心
    {
      path: '/UserCenter',
      component: Layout,
      children: [
        {
          path: '',
          name: 'UserMessage',
          component: resolve => require(['@/user/userCenter/userMessage/userMessage'], resolve),
          meta: {
            title: '用户信息',
            requireAuth: true
          }
        },
        {
          path: 'credit',
          name: 'Credit',
          component: resolve => require(['@/user/userCenter/credit/credit'], resolve),
          meta: {
            title: '继教学分',
            requireAuth: true
          }
        },
        // 用户中心的科研对标，与管理端公用页面
        {
          path: 'scientific',
          name: 'Scientific',
          component: resolve => require(['@/page/userCenter/scientific/scientific'], resolve),
          meta: {
            title: '科研对标',
            requireAuth: true
          }
        },
        {
          path: 'sociology',
          name: 'Sociology',
          component: resolve => require(['@/user/userCenter/sociology/sociology'], resolve),
          meta: {
            title: '社会任职',
            requireAuth: true
          }
        },
        {
          path: 'achievement',
          name: 'Achievement',
          component: resolve => require(['@/user/userCenter/achievement/achievement'], resolve),
          meta: {
            title: '用户业绩',
            requireAuth: true
          }
        },
        {
          path: 'resume',
          name: 'ResumeDetail',
          component: resolve => require(['@/page/userCenter/resume/resumeDetail'], resolve),
          meta: {
            title: '学术简历',
            requireAuth: true
          }
        }
      ]
    },
    // 用户信息的详情页面，与管理端公用页面
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
    // 社会任职的任职详情、审核详情，与admin公用
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
    // 我的申报详情页
    {
      path: '/declareDetail',
      name: 'DeclareDetail',
      component: resolve => require(['@/page/userCenter/achievement/declareDetail'], resolve),
      meta: {
        title: '我的申报',
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
    scientificServing,
    Policy,
    Notic,
    ManagementOfAchievement,
    FundManagement,
    ItemsManagement,
    ProjectManagement,
    ScientificResearchTopic,
    SecuritySupport,
    ElectronicArchives,
    EvaluationDecision,
    DataReport,
    DisciplineBase,
    TalentPlan
    // 科研服务
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('changeTitle', to.meta.title)
  // store.commit('thisMenu', to.name)
  // console.log(router)
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        name: 'Login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
