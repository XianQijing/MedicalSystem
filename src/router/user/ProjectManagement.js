import Layout from '@/layout/layout'

const router = {
  path: '/ProjectManagement',
  component: Layout,
  children: [
    {
      path: '',
      name: 'ProjectApproval',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectApproval'], resolve),
      meta: {
        title: '立项管理',
        requireAuth: true
      }
    },
    {
      path: 'ProjectContract',
      name: 'ProjectContract',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectContract'], resolve),
      meta: {
        title: '项目合同',
        requireAuth: true
      }
    },
    {
      path: 'ContractSubmission',
      name: 'ContractSubmission',
      component: resolve => require(['@/user/ProjectManagement/page/ContractSubmission'], resolve),
      meta: {
        title: '提交合同',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ContractChange',
      name: 'ContractChange',
      component: resolve => require(['@/user/ProjectManagement/page/ContractChange'], resolve),
      meta: {
        title: '提交合同',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ContractSearch',
      name: 'ContractSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ContractSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ProjectChange',
      name: 'ProjectChange',
      component: resolve => require(['@/user/ProjectManagement/page/ProjectChange'], resolve),
      meta: {
        title: '项目变更',
        requireAuth: true
      }
    },
    {
      path: 'ChangeApplicationSearch',
      name: 'ChangeApplicationSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ChangeApplicationSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Daily',
      name: 'Daily',
      component: resolve => require(['@/user/ProjectManagement/page/Daily'], resolve),
      meta: {
        title: '日常考核',
        requireAuth: true
      }
    },
    {
      path: 'AssessmentSearch',
      name: 'AssessmentSearch',
      component: resolve => require(['@/user/ProjectManagement/page/AssessmentSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'IntermediateInspection',
      name: 'IntermediateInspection',
      component: resolve => require(['@/user/ProjectManagement/page/IntermediateInspection'], resolve),
      meta: {
        title: '中期检查',
        requireAuth: true
      }
    },
    {
      path: 'InspectionSearch',
      name: 'InspectionSearch',
      component: resolve => require(['@/user/ProjectManagement/page/InspectionSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'InspectionEdit',
      name: 'InspectionEdit',
      component: resolve => require(['@/user/ProjectManagement/page/InspectionEdit'], resolve),
      meta: {
        title: '内容修改',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Concluding',
      name: 'Concluding',
      component: resolve => require(['@/user/ProjectManagement/page/Concluding'], resolve),
      meta: {
        title: '结题鉴定',
        requireAuth: true
      }
    },
    {
      path: 'ConcludingSearch',
      name: 'ConcludingSearch',
      component: resolve => require(['@/user/ProjectManagement/page/ConcludingSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'CarryForward',
      name: 'CarryForward',
      component: resolve => require(['@/user/ProjectManagement/page/CarryForward'], resolve),
      meta: {
        title: '结转项目',
        requireAuth: true
      }
    }
  ]
}

export default router
