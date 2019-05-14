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
      meta: {
        title: '参加会议',
        requireAuth: true
      }
    },
    {
      path: 'ExaminFund',
      name: 'ExaminFund',
      component: resolve => require(['@/user/ItemsManagement/page/ExaminFund'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'GoAbroad',
      name: 'GoAbroad',
      component: resolve => require(['@/user/ItemsManagement/page/GoAbroad'], resolve),
      meta: {
        title: '出国交流',
        requireAuth: true
      }
    },
    {
      path: 'GoAbroadPritingDetail',
      name: 'GoAbroadPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/GoAbroadPritingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ScientificResearchCooperation',
      name: 'ScientificResearchCooperation',
      component: resolve => require(['@/user/ItemsManagement/page/ScientificResearchCooperation'], resolve),
      meta: {
        title: '科研合作',
        requireAuth: true
      }
    },
    {
      path: 'CooperationPritingDetail',
      name: 'CooperationPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/CooperationPritingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ExperimentalApplication',
      name: 'ExperimentalApplication',
      component: resolve => require(['@/user/ItemsManagement/page/ExperimentalApplication'], resolve),
      meta: {
        title: '实验申请',
        requireAuth: true
      }
    },
    {
      path: 'ExperimentalPritingDetail',
      name: 'ExperimentalPritingDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ExperimentalPritingDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ReagentConsumables',
      name: 'ReagentConsumables',
      component: resolve => require(['@/user/ItemsManagement/page/ReagentConsumables'], resolve),
      meta: {
        title: '试剂耗材',
        requireAuth: true
      }
    },
    {
      path: 'ReagentStatuesDetail',
      name: 'ReagentStatuesDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ReagentStatuesDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'EquipmentPurchase',
      name: 'EquipmentPurchase',
      component: resolve => require(['@/user/ItemsManagement/page/EquipmentPurchase'], resolve),
      meta: {
        title: '仪器设备',
        requireAuth: true
      }
    },
    {
      path: 'EquipmentStatuesDetail',
      name: 'EquipmentStatuesDetail',
      component: resolve => require(['@/user/ItemsManagement/page/EquipmentStatuesDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'HostMeeting',
      name: 'HostMeeting',
      component: resolve => require(['@/user/ItemsManagement/page/HostMeeting'], resolve),
      meta: {
        title: '主办单位',
        requireAuth: true
      }
    },
    {
      path: 'AProjectMessage',
      name: 'AProjectMessage',
      component: resolve => require(['@/user/ItemsManagement/page/AProjectMessage'], resolve),
      meta: {
        title: '项目信息',
        requireAuth: true
      }
    },
    {
      path: 'AProjectMessageDetail',
      name: 'AProjectMessageDetail',
      component: resolve => require(['@/user/ItemsManagement/page/AProjectMessageDetail'], resolve),
      meta: {
        requireAuth: true
      }
    },
    {
      path: 'ProjectSearchDetail',
      name: 'ProjectSearchDetail',
      component: resolve => require(['@/user/ItemsManagement/page/ProjectSearchDetail'], resolve),
      meta: {
        title: '项目信息',
        requireAuth: true
      }
    }
  ]
}

export default router
