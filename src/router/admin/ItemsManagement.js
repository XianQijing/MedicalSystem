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
      meta: '事项管理'
    },
    {
      path: 'ExaminMeeting',
      name: 'ExaminMeeting',
      component: resolve => require(['@/admin/ItemsManagement/page/ExaminMeeting'], resolve),
      meta: '会议审核'
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
      meta: '科研合作'
    },
    {
      path: 'CooperationAudit',
      name: 'CooperationAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/CooperationAudit'], resolve),
      meta: '合作审核'
    },
    {
      path: 'ExperimentalApplication',
      name: 'ExperimentalApplication',
      component: resolve => require(['@/admin/ItemsManagement/page/ExperimentalApplication'], resolve),
      meta: '实验申请'
    },
    {
      path: 'UseAudit',
      name: 'UseAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/UseAudit'], resolve),
      meta: '使用审核'
    },
    {
      path: 'ReagentConsumables',
      name: 'ReagentConsumables',
      component: resolve => require(['@/admin/ItemsManagement/page/ReagentConsumables'], resolve),
      meta: '试剂耗材'
    },
    {
      path: 'ConsumablesAudit',
      name: 'ConsumablesAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/ConsumablesAudit'], resolve),
      meta: '耗材审核'
    },
    {
      path: 'EquipmentPurchase',
      name: 'EquipmentPurchase',
      component: resolve => require(['@/admin/ItemsManagement/page/EquipmentPurchase'], resolve),
      meta: '仪器设备'
    },
    {
      path: 'PurchaseAudit',
      name: 'PurchaseAudit',
      component: resolve => require(['@/admin/ItemsManagement/page/PurchaseAudit'], resolve),
      meta: '购买审核'
    },
    {
      path: 'HostMeeting',
      name: 'HostMeeting',
      component: resolve => require(['@/admin/ItemsManagement/page/HostMeeting'], resolve),
      meta: '主办单位'
    },
    {
      path: 'AProjectMessage',
      name: 'AProjectMessage',
      component: resolve => require(['@/admin/ItemsManagement/page/AProjectMessage'], resolve),
      meta: '项目信息'
    },
    {
      path: 'ProjectSearchDetail',
      name: 'ProjectSearchDetail',
      component: resolve => require(['@/admin/ItemsManagement/page/ProjectSearchDetail'], resolve),
      meta: '项目信息'
    }
  ]
}

export default router
