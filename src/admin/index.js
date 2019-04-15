import Vue from 'vue'
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
      meta: '首页'
    },
    {
      path: '/OfficeAbroadDetail',
      name: 'OfficeAbroadDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeAbroadDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/OfficeMeetingDetail',
      name: 'OfficeMeetingDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMeetingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/OfficePaperDetail',
      name: 'OfficePaperDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePaperDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/OfficePatentDetail',
      name: 'OfficePatentDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePatentDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/OfficeMonographDetail',
      name: 'OfficeMonographDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMonographDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/OfficeServingDetail',
      name: 'OfficeServingDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeServingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: '/CooperationDetail',
      name: 'CooperationDetail',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/CooperationDetail'], resolve),
      meta: '查看详情'
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
  document.title = to.meta
  next()
})
export default router
