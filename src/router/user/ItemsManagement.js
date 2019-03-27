// 事项管理路由文件
import ItemsManagement from '@/user/ItemsManagement/ItemsManagement'

const router = {
  path: '/ItemsManagement',
  // name: 'ItemsManagement',
  component: ItemsManagement,
  children: [
    {
      path: '',
      name: 'AttendTheMeeting',
      component: resolve => require(['@/user/ItemsManagement/page/AttendTheMeeting'], resolve),
      meta: '事项管理'
    },
    // {
    //   path: 'ExaminMeeting',
    //   name: 'ExaminMeeting',
    //   component: resolve => require(['@/user/ItemsManagement/page/ExaminMeeting'], resolve),
    //   meta: '会议审核'
    // },
    // {
    //   path: 'ExaminFund',
    //   name: 'ExaminFund',
    //   component: resolve => require(['@/user/ItemsManagement/page/ExaminFund'], resolve),
    //   meta: '经费审核'
    // },
    // {
    //   path: 'GoAbroad',
    //   name: 'GoAbroad',
    //   component: resolve => require(['@/user/ItemsManagement/page/GoAbroad'], resolve),
    //   meta: '出国交流'
    // },
    // {
    //   path: 'ExchangeAudit',
    //   name: 'ExchangeAudit',
    //   component: resolve => require(['@/user/ItemsManagement/page/ExchangeAudit'], resolve),
    //   meta: '出国交流'
    // },
    // {
    //   path: 'ScientificResearchCooperation',
    //   name: 'ScientificResearchCooperation',
    //   component: resolve => require(['@/user/ItemsManagement/page/ScientificResearchCooperation'], resolve),
    //   meta: '科研合作'
    // },
    // {
    //   path: 'CooperationAudit',
    //   name: 'CooperationAudit',
    //   component: resolve => require(['@/user/ItemsManagement/page/CooperationAudit'], resolve),
    //   meta: '合作审核'
    // },
    // {
    //   path: 'ExperimentalApplication',
    //   name: 'ExperimentalApplication',
    //   component: resolve => require(['@/user/ItemsManagement/page/ExperimentalApplication'], resolve),
    //   meta: '实验申请'
    // },
    // {
    //   path: 'UseAudit',
    //   name: 'UseAudit',
    //   component: resolve => require(['@/user/ItemsManagement/page/UseAudit'], resolve),
    //   meta: '使用审核'
    // },
    // {
    //   path: 'ReagentConsumables',
    //   name: 'ReagentConsumables',
    //   component: resolve => require(['@/user/ItemsManagement/page/ReagentConsumables'], resolve),
    //   meta: '试剂耗材'
    // },
    // {
    //   path: 'ConsumablesAudit',
    //   name: 'ConsumablesAudit',
    //   component: resolve => require(['@/user/ItemsManagement/page/ConsumablesAudit'], resolve),
    //   meta: '耗材审核'
    // },
    // {
    //   path: 'EquipmentPurchase',
    //   name: 'EquipmentPurchase',
    //   component: resolve => require(['@/user/ItemsManagement/page/EquipmentPurchase'], resolve),
    //   meta: '仪器设备'
    // },
    // {
    //   path: 'PurchaseAudit',
    //   name: 'PurchaseAudit',
    //   component: resolve => require(['@/user/ItemsManagement/page/PurchaseAudit'], resolve),
    //   meta: '购买审核'
    // },
    // {
    //   path: 'HostMeeting',
    //   name: 'HostMeeting',
    //   component: resolve => require(['@/user/ItemsManagement/page/HostMeeting'], resolve),
    //   meta: '主办单位'
    // },
    // {
    //   path: 'AProjectMessage',
    //   name: 'AProjectMessage',
    //   component: resolve => require(['@/user/ItemsManagement/page/AProjectMessage'], resolve),
    //   meta: '项目信息'
    // },
    // {
    //   path: 'ProjectSearchDetail',
    //   name: 'ProjectSearchDetail',
    //   component: resolve => require(['@/user/ItemsManagement/page/ProjectSearchDetail'], resolve),
    //   meta: '项目信息'
    // }
  ]
}

export default router
