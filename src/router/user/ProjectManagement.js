import ProjectManagement from '@/user/ProjectManagement/ProjectManagement'

const router = {
  path: '/ProjectManagement',
  component: ProjectManagement,
  children: [
    {
      path: '',
      name: 'ProjectApproval',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectApproval'], resolve),
      meta: '立项管理'
    },
    {
      path: 'ProjectContract',
      name: 'ProjectContract',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectContract'], resolve),
      meta: '项目合同'
    },
    {
      path: 'ContractSubmission',
      name: 'ContractSubmission',
      component: resolve => require(['@/user/ProjectManagement/page/ContractSubmission'], resolve),
      meta: '提交合同'
    },
    {
      path: 'ContractChange',
      name: 'ContractChange',
      component: resolve => require(['@/user/ProjectManagement/page/ContractChange'], resolve),
      meta: '提交合同'
    },
    {
      path: 'ContractSearch',
      name: 'ContractSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ContractSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectChange',
      name: 'ProjectChange',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectChange'], resolve),
      meta: '项目变更'
    },
    {
      path: 'ChangeApplicationSearch',
      name: 'ChangeApplicationSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ChangeApplicationSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'Daily',
      name: 'Daily',
      component: resolve => require(['@/user/ProjectManagement/page/Daily'], resolve),
      meta: '日常考核'
    },
    {
      path: 'AssessmentSearch',
      name: 'AssessmentSearch',
      component: resolve => require(['@/user/ProjectManagement/page/AssessmentSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'IntermediateInspection',
      name: 'IntermediateInspection',
      component: resolve => require(['@/user/ProjectManagement/page/IntermediateInspection'], resolve),
      meta: '中期检查'
    },
    {
      path: 'InspectionSearch',
      name: 'InspectionSearch',
      component: resolve => require(['@/user/ProjectManagement/page/InspectionSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'InspectionEdit',
      name: 'InspectionEdit',
      component: resolve => require(['@/user/ProjectManagement/page/InspectionEdit'], resolve),
      meta: '内容修改'
    },
    {
      path: 'Concluding',
      name: 'Concluding',
      component: resolve => require(['@/user/ProjectManagement/page/Concluding'], resolve),
      meta: '结题鉴定'
    },
    {
      path: 'ConcludingSearch',
      name: 'ConcludingSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ConcludingSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'CarryForward',
      name: 'CarryForward',
      component: resolve => require(['@/user/ProjectManagement/page/CarryForward'], resolve),
      meta: '结转项目'
    }
  ]
}

export default router
