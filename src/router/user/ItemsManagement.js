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
      meta: '参加会议'
    },
    {
      path: 'ExaminFund',
      name: 'ExaminFund',
      component: resolve => require(['@/user/ItemsManagement/page/ExaminFund'], resolve),
      meta: '查看详情'
    },
    {
      path: 'GoAbroad',
      name: 'GoAbroad',
      component: resolve => require(['@/user/ItemsManagement/page/GoAbroad'], resolve),
      meta: '出国交流'
    },
    {
      path: 'GoAbroadPritingDetail',
      name: 'GoAbroadPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/GoAbroadPritingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ScientificResearchCooperation',
      name: 'ScientificResearchCooperation',
      component: resolve => require(['@/user/ItemsManagement/page/ScientificResearchCooperation'], resolve),
      meta: '科研合作'
    },
    {
      path: 'CooperationPritingDetail',
      name: 'CooperationPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/CooperationPritingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ExperimentalApplication',
      name: 'ExperimentalApplication',
      component: resolve => require(['@/user/ItemsManagement/page/ExperimentalApplication'], resolve),
      meta: '实验申请'
    },
    {
      path: 'ExperimentalPritingDetail',
      name: 'ExperimentalPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ExperimentalPritingDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ReagentConsumables',
      name: 'ReagentConsumables',
      component: resolve => require(['@/user/ItemsManagement/page/ReagentConsumables'], resolve),
      meta: '试剂耗材'
    },
    {
      path: 'ReagentStatuesDetail',
      name: 'ReagentStatuesDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ReagentStatuesDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'EquipmentPurchase',
      name: 'EquipmentPurchase',
      component: resolve => require(['@/user/ItemsManagement/page/EquipmentPurchase'], resolve),
      meta: '仪器设备'
    },
    {
      path: 'EquipmentStatuesDetail',
      name: 'EquipmentStatuesDetail',
      component: resolve => require(['@/user/ItemsManagement/page/EquipmentStatuesDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'HostMeeting',
      name: 'HostMeeting',
      component: resolve => require(['@/user/ItemsManagement/page/HostMeeting'], resolve),
      meta: '主办单位'
    },
    {
      path: 'AProjectMessage',
      name: 'AProjectMessage',
      component: resolve => require(['@/user/ItemsManagement/page/AProjectMessage'], resolve),
      meta: '项目信息'
    },
    {
      path: 'AProjectMessageDetail',
      name: 'AProjectMessageDetail',
      component: resolve => require(['@/user/ItemsManagement/page/AProjectMessageDetail'], resolve)
    },
    {
      path: 'ProjectSearchDetail',
      name: 'ProjectSearchDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ProjectSearchDetail'], resolve),
      meta: '项目信息'
    }
  ]
}

export default router
