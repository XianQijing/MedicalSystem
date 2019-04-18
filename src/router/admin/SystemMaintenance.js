// 系统维护
import SystemMaintenance from '@/admin/SystemMaintenance/SystemMaintenance.vue'

const router = {
  path: '/SystemMaintenance',
  component: SystemMaintenance,
  children: [
    {
      path: '',
      name: 'BasicSetup',
      component: resolve => require(['@/admin/SystemMaintenance/BasicSetup/BasicSetup'], resolve),
      meta: '基本设置'
    },
    {
      path: 'Privilege',
      name: 'Privilege',
      component: resolve => require(['@/admin/SystemMaintenance/Privilege/Privilege'], resolve),
      meta: '权限设置'
    },
    {
      path: 'AdminMessage',
      name: 'AdminMessage',
      component: resolve => require(['@/admin/SystemMaintenance/Privilege/AdminMessage'], resolve),
      meta: '信息修改'
    },
    {
      path: 'ExpertSetup',
      name: 'ExpertSetup',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertSetup'], resolve),
      meta: '专家设置'
    },
    {
      path: 'ExpertEdit',
      name: 'ExpertEdit',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertEdit'], resolve),
      meta: '修改信息'
    },
    {
      path: 'ExpertInformation',
      name: 'ExpertInformation',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertInformation'], resolve),
      meta: '专家设置'
    },
    {
      path: 'PeriodicalSetup',
      name: 'PeriodicalSetup',
      component: resolve => require(['@/admin/SystemMaintenance/PeriodicalSetup/PeriodicalSetup'], resolve),
      meta: '期刊设置'
    },
    {
      path: 'FundsSetting',
      name: 'FundsSetting',
      component: resolve => require(['@/admin/SystemMaintenance/FundsSetting/FundsSetting'], resolve),
      meta: '预算设置'
    },
    {
      path: 'Assessment',
      name: 'Assessment',
      component: resolve => require(['@/admin/SystemMaintenance/Assessment/Assessment'], resolve),
      meta: '考核设置'
    },
    {
      path: 'DailySetup',
      name: 'DailySetup',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/DailySetup'], resolve),
      meta: '日常设置'
    },
    {
      path: 'CoreSetup',
      name: 'CoreSetup',
      component: resolve => require(['@/admin/SystemMaintenance/CoreSetup/CoreSetup'], resolve),
      meta: '核心设置'
    },
    {
      path: 'DailySetting',
      name: 'DailySetting',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/DailySetting'], resolve),
      meta: '日常设置'
    },
    {
      path: 'DeanAccount',
      name: 'DeanAccount',
      component: resolve => require(['@/admin/SystemMaintenance/DeanAccount/DeanAccount'], resolve),
      meta: '院长账号'
    },
    {
      path: 'Quota',
      name: 'Quota',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/Quota'], resolve)
    }
  ]
}

export default router
