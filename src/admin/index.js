import Vue from 'vue'
import store from '../store/admin'
import Router from 'vue-router'
import HomePage from '@/admin/homePage/homePage'
import UserCenter from '@/router/admin/userCenter'
import scientificServing from '@/router/admin/scientificServing'
import Policy from '@/router/admin/policy'
import Notic from '@/router/admin/notic'
import Login from '@/router/admin/Login'
import ManagementOfAchievement from '@/router/admin/managementOfAchievement'
import FundManagement from '@/router/admin/fundManagement'
import ItemsManagement from '@/router/admin/ItemsManagement'
import ProjectManagement from '@/router/admin/ProjectManagement'
import ScientificResearchTopic from '@/router/admin/ScientificResearchTopic'
import SecuritySupport from '@/router/admin/SecuritySupport'
import ElectronicArchives from '@/router/admin/ElectronicArchives'
import EvaluationDecision from '@/router/admin/EvaluationDecision'
import DataReport from '@/router/admin/DataReport'
import LeadingOffice from '@/router/admin/LeadingOffice'
import ExpertReview from '@/router/admin/ExpertReview'
import SystemMaintenance from '@/router/admin/SystemMaintenance'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/admin',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '首页',
        requireAuth: true
      }
    },
    {
      path: '/OfficeAbroadDetail',
      name: 'OfficeAbroadDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeAbroadDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/OfficeMeetingDetail',
      name: 'OfficeMeetingDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMeetingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/OfficePaperDetail',
      name: 'OfficePaperDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePaperDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/OfficePatentDetail',
      name: 'OfficePatentDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePatentDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/OfficeMonographDetail',
      name: 'OfficeMonographDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMonographDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/OfficeServingDetail',
      name: 'OfficeServingDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeServingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: '/CooperationDetail',
      name: 'CooperationDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/CooperationDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    Login,
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
    LeadingOffice,
    ExpertReview,
    SystemMaintenance
  ].concat(UserCenter)
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    store.commit('changeTitle', to.meta.title)
  }
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
