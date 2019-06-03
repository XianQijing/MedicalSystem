import Layout from '@/layout/layout'

const router = {
  path: '/ProjectManagement',
  component: Layout,
  children: [
    {
      path: '',
      name: 'ProjectApproval',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectApproval'], resolve),
      meta: {
        title: '立项管理',
        requireAuth: true
      }
    },
    {
      path: 'ProjectContract',
      name: 'ProjectContract',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectContract'], resolve),
      meta: {
        title: '项目合同',
        requireAuth: true
      }
    },
    {
      path: 'ContractSearch',
      name: 'ContractSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/ContractSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ProjectChange',
      name: 'ProjectChange',
      component: resolve => require(['@/admin/ProjectManagement/page/ProjectChange'], resolve),
      meta: {
        title: '项目变更',
        requireAuth: true
      }
    },
    {
      path: 'ChangeApplicationSearch',
      name: 'ChangeApplicationSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/ChangeApplicationSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Daily',
      name: 'Daily',
      component: resolve => require(['@/admin/ProjectManagement/page/Daily'], resolve),
      meta: {
        title: '日常考核',
        requireAuth: true
      }
    },
    {
      path: 'AssessmentSearch',
      name: 'AssessmentSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/AssessmentSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'IntermediateInspection',
      name: 'IntermediateInspection',
      component: resolve => require(['@/admin/ProjectManagement/page/IntermediateInspection'], resolve),
      meta: {
        title: '中期检查',
        requireAuth: true
      }
    },
    {
      path: 'WatchNotice',
      name: 'WatchNotice',
      component: resolve => require(['@/admin/ProjectManagement/page/WatchNotice'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'EditNotice',
      name: 'EditNotice',
      component: resolve => require(['@/admin/ProjectManagement/page/EditNotice'], resolve),
      meta: {
        title: '编辑修改',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'InspectionSearch',
      name: 'InspectionSearch',
      component: resolve => require(['@/admin/ProjectManagement/page/InspectionSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Concluding',
      name: 'Concluding',
      component: resolve => require(['@/admin/ProjectManagement/page/Concluding'], resolve),
      meta: {
        title: '结题鉴定',
        requireAuth: true
      }
    },
    {
      path: 'CarryForward',
      name: 'CarryForward',
      component: resolve => require(['@/admin/ProjectManagement/page/CarryForward'], resolve),
      meta: {
        title: '结转项目',
        requireAuth: true
      }
    }
  ]
}

export default router
