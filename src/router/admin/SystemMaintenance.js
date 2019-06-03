// 系统维护
import Layout from '@/layout/layout'

const router = {
  path: '/SystemMaintenance',
  component: Layout,
  children: [
    {
      path: '',
      name: 'BasicSetup',
      component: resolve => require(['@/admin/SystemMaintenance/BasicSetup/BasicSetup'], resolve),
      meta: {
        title: '基本设置',
        requireAuth: true
      }
    },
    {
      path: 'Privilege',
      name: 'Privilege',
      component: resolve => require(['@/admin/SystemMaintenance/Privilege/Privilege'], resolve),
      meta: {
        title: '权限设置',
        requireAuth: true
      }
    },
    {
      path: 'AdminMessage',
      name: 'AdminMessage',
      component: resolve => require(['@/admin/SystemMaintenance/Privilege/AdminMessage'], resolve),
      meta: {
        title: '信息修改',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ExpertSetup',
      name: 'ExpertSetup',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertSetup'], resolve),
      meta: {
        title: '专家设置',
        requireAuth: true
      }
    },
    {
      path: 'ExpertEdit',
      name: 'ExpertEdit',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertEdit'], resolve),
      meta: {
        title: '修改信息',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ExpertInformation',
      name: 'ExpertInformation',
      component: resolve => require(['@/admin/SystemMaintenance/ExpertSetup/ExpertInformation'], resolve),
      meta: {
        title: '专家设置',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'PeriodicalSetup',
      name: 'PeriodicalSetup',
      component: resolve => require(['@/admin/SystemMaintenance/PeriodicalSetup/PeriodicalSetup'], resolve),
      meta: {
        title: '期刊设置',
        requireAuth: true
      }
    },
    {
      path: 'FundsSetting',
      name: 'FundsSetting',
      component: resolve => require(['@/admin/SystemMaintenance/FundsSetting/FundsSetting'], resolve),
      meta: {
        title: '预算设置',
        requireAuth: true
      }
    },
    {
      path: 'Assessment',
      name: 'Assessment',
      component: resolve => require(['@/admin/SystemMaintenance/Assessment/Assessment'], resolve),
      meta: {
        title: '考核设置',
        requireAuth: true
      }
    },
    {
      path: 'DailySetup',
      name: 'DailySetup',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/DailySetup'], resolve),
      meta: {
        title: '日常设置',
        requireAuth: true
      }
    },
    {
      path: 'CoreSetup',
      name: 'CoreSetup',
      component: resolve => require(['@/admin/SystemMaintenance/CoreSetup/CoreSetup'], resolve),
      meta: {
        title: '核心设置',
        requireAuth: true
      }
    },
    {
      path: 'DailySetting',
      name: 'DailySetting',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/DailySetting'], resolve),
      meta: {
        title: '日常设置',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'DeanAccount',
      name: 'DeanAccount',
      component: resolve => require(['@/admin/SystemMaintenance/DeanAccount/DeanAccount'], resolve),
      meta: {
        title: '院长账号',
        requireAuth: true
      }
    },
    {
      path: 'Quota',
      name: 'Quota',
      component: resolve => require(['@/admin/SystemMaintenance/DailySetup/Quota'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'DataImport',
      name: 'DataImport',
      component: resolve => require(['@/admin/SystemMaintenance/DataImport/DataImport'], resolve),
      meta: {
        title: '账号导入',
        requireAuth: true
      }
    },
    {
      path: 'UserMsg',
      name: 'UserMsg',
      component: resolve => require(['@/admin/SystemMaintenance/DataImport/userMsg'], resolve),
      meta: {
        title: '用户信息',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'WatchData',
      name: 'WatchData',
      component: resolve => require(['@/admin/SystemMaintenance/DataImport/WatchData'], resolve),
      meta: {
        title: '用户信息',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'MsgDetail',
      name: 'MsgDetail',
      component: resolve => require(['@/admin/SystemMaintenance/DataImport/MsgDetail'], resolve),
      meta: {
        title: '信息修改',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'DataProject',
      name: 'DataProject',
      component: resolve => require(['@/admin/SystemMaintenance/DataImport/DataProject'], resolve),
      meta: {
        title: '我的项目',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
