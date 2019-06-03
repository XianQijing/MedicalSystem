import Layout from '@/layout/layout'

const router = {
  path: '/ScientificResearchTopic',
  // name: 'ScientificResearchTopic',
  component: Layout,
  children: [
    {
      path: '',
      name: 'ProjectSettings',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/ProjectSettings'], resolve),
      meta: {
        title: '项目设置',
        requireAuth: true
      }
    },
    {
      path: 'TaskGuide',
      name: 'TaskGuide',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/TaskGuide'], resolve),
      meta: {
        title: '课题指南',
        requireAuth: true
      }
    },
    {
      path: 'GuideRelease',
      name: 'GuideRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/GuideRelease'], resolve),
      meta: {
        title: '指南发布',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'PlanRelease',
      name: 'PlanRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/PlanRelease'], resolve),
      meta: {
        title: '计划发布',
        requireAuth: true
      }
    },
    {
      path: 'addPlan',
      name: 'addPlan',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/addPlan'], resolve),
      meta: {
        title: '新增发布',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'FormalInspection',
      name: 'FormalInspection',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/FormalInspection'], resolve),
      meta: {
        title: '形式审查',
        requireAuth: true
      }
    },
    {
      path: 'ReviewManagement',
      name: 'ReviewManagement',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/ReviewManagement'], resolve),
      meta: {
        title: '评审管理',
        requireAuth: true
      }
    },
    {
      path: 'Approval',
      name: 'Approval',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/Approval'], resolve),
      meta: {
        title: '批准文件',
        requireAuth: true
      }
    },
    {
      path: 'FileRelease',
      name: 'FileRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/FileRelease'], resolve),
      meta: {
        title: '文件发布',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
