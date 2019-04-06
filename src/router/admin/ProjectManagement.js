import ProjectManagement from '@/admin/ProjectManagement/ProjectManagement'

const router = {
  path: '/ProjectManagement',
  component: ProjectManagement,
  children: [
    {
      path: '',
      name: 'ProjectApproval',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectApproval'], resolve),
      meta: '立项管理'
    },
    {
      path: 'ProjectContract',
      name: 'ProjectContract',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectContract'], resolve),
      meta: '项目合同'
    },
    {
      path: 'ContractSearch',
      name: 'ContractSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/ContractSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectChange',
      name: 'ProjectChange',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectChange'], resolve),
      meta: '项目变更'
    },
    {
      path: 'ChangeApplicationSearch',
      name: 'ChangeApplicationSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/ChangeApplicationSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'Daily',
      name: 'Daily',
      component: resolve => require(['@/admin/ProjectManagement/page/Daily'], resolve),
      meta: '日常考核'
    },
    {
      path: 'AssessmentSearch',
      name: 'AssessmentSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/AssessmentSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'IntermediateInspection',
      name: 'IntermediateInspection',
      component: resolve => require(['@/admin/ProjectManagement/page/IntermediateInspection'], resolve),
      meta: '中期检查'
    },
    {
      path: 'WatchNotice',
      name: 'WatchNotice',
      component: resolve => require(['@/admin/ProjectManagement/page/WatchNotice'], resolve),
      meta: '查看详情'
    },
    {
      path: 'EditNotice',
      name: 'EditNotice',
      component: resolve => require(['@/admin/ProjectManagement/page/EditNotice'], resolve),
      meta: '编辑修改'
    },
    {
      path: 'InspectionSearch',
      name: 'InspectionSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/InspectionSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'Concluding',
      name: 'Concluding',
      component: resolve => require(['@/admin/ProjectManagement/page/Concluding'], resolve),
      meta: '结题鉴定'
    },
    {
      path: 'CarryForward',
      name: 'CarryForward',
      component: resolve => require(['@/admin/ProjectManagement/page/CarryForward'], resolve),
      meta: '结转项目'
    }
  ]
}

export default router