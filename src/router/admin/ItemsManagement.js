// 事项管理路由文件
import ItemsManagement from '@/admin/ItemsManagement/ItemsManagement'

const router = {
  path: '/ItemsManagement',
  // name: 'ItemsManagement',
  component: ItemsManagement,
  children: [
    {
      path: '',
      name: 'AttendTheMeeting',
      component: resolve => require(['@/admin/ItemsManagement/page/AttendTheMeeting'], resolve),
      meta: {
        title: '事项管理',
        requireAuth: true
      }
    },
    {
      path: 'ExaminMeeting',
      name: 'ExaminMeeting',
      component: resolve => require(['@/admin/ItemsManagement/page/ExaminMeeting'], resolve),
      meta: {
        title: '会议审核',
        requireAuth: true
      }
    },
    {
      path: 'ExaminFund',
      name: 'ExaminFund',
      component: resolve => require(['@/admin/ItemsManagement/page/ExaminFund'], resolve),
      meta: '经费审核'
    },
    {
      path: 'GoAbroad',
      name: 'GoAbroad',
      component: resolve => require(['@/admin/ItemsManagement/page/GoAbroad'], resolve),
      meta: '出国交流'
    },
    {
      path: 'ExchangeAudit',
      name: 'ExchangeAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/ExchangeAudit'], resolve),
      meta: '出国交流'
    },
    {
      path: 'ScientificResearchCooperation',
      name: 'ScientificResearchCooperation',
      component: resolve => require(['@/admin/ItemsManagement/page/ScientificResearchCooperation'], resolve),
      meta: {
        title: '科研合作',
        requireAuth: true
      }
    },
    {
      path: 'CooperationAudit',
      name: 'CooperationAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/CooperationAudit'], resolve),
      meta: {
        title: '合作审核',
        requireAuth: true
      }
    },
    {
      path: 'ExperimentalApplication',
      name: 'ExperimentalApplication',
      component: resolve => require(['@/admin/ItemsManagement/page/ExperimentalApplication'], resolve),
      meta: {
        title: '实验申请',
        requireAuth: true
      }
    },
    {
      path: 'UseAudit',
      name: 'UseAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/UseAudit'], resolve),
      meta: {
        title: '使用审核',
        requireAuth: true
      }
    },
    {
      path: 'ReagentConsumables',
      name: 'ReagentConsumables',
      component: resolve => require(['@/admin/ItemsManagement/page/ReagentConsumables'], resolve),
      meta: {
        title: '试剂耗材',
        requireAuth: true
      }
    },
    {
      path: 'ConsumablesAudit',
      name: 'ConsumablesAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/ConsumablesAudit'], resolve),
      meta: {
        title: '耗材审核',
        requireAuth: true
      }
    },
    {
      path: 'EquipmentPurchase',
      name: 'EquipmentPurchase',
      component: resolve => require(['@/admin/ItemsManagement/page/EquipmentPurchase'], resolve),
      meta: {
        title: '仪器设备',
        requireAuth: true
      }
    },
    {
      path: 'PurchaseAudit',
      name: 'PurchaseAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/PurchaseAudit'], resolve),
      meta: {
        title: '购买审核',
        requireAuth: true
      }
    },
    {
      path: 'HostMeeting',
      name: 'HostMeeting',
      component: resolve => require(['@/admin/ItemsManagement/page/HostMeeting'], resolve),
      meta: {
        title: '主办单位',
        requireAuth: true
      }
    },
    {
      path: 'AProjectMessage',
      name: 'AProjectMessage',
      component: resolve => require(['@/admin/ItemsManagement/page/AProjectMessage'], resolve),
      meta: {
        title: '项目信息',
        requireAuth: true
      }
    },
    {
      path: 'ProjectSearchDetail',
      name: 'ProjectSearchDetail',
      component: resolve => require(['@/admin/ItemsManagement/page/ProjectSearchDetail'], resolve),
      meta: {
        title: '项目信息',
        requireAuth: true
      }
    }
  ]
}

export default router
