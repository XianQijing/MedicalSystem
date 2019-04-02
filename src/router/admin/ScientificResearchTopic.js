import ScientificResearchTopic from '@/admin/ScientificResearchTopic/ScientificResearchTopic'

const router = {
  path: '/ScientificResearchTopic',
  // name: 'ScientificResearchTopic',
  component: ScientificResearchTopic,
  children: [
    {
      path: '',
      name: 'ProjectSettings',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/ProjectSettings'], resolve),
      meta: '项目设置'
    },
    {
      path: 'TaskGuide',
      name: 'TaskGuide',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/TaskGuide'], resolve),
      meta: '课题指南'
    },
    {
      path: 'GuideRelease',
      name: 'GuideRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/GuideRelease'], resolve),
      meta: '指南发布'
    },
    {
      path: 'PlanRelease',
      name: 'PlanRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/PlanRelease'], resolve),
      meta: '计划发布'
    },
    {
      path: 'addPlan',
      name: 'addPlan',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/addPlan'], resolve),
      meta: '新增发布'
    },
    {
      path: 'FormalInspection',
      name: 'FormalInspection',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/FormalInspection'], resolve),
      meta: '形式审查'
    },
    {
      path: 'ReviewManagement',
      name: 'ReviewManagement',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/ReviewManagement'], resolve),
      meta: '评审管理'
    },
    {
      path: 'Approval',
      name: 'Approval',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/Approval'], resolve),
      meta: '批准文件'
    },
    {
      path: 'FileRelease',
      name: 'FileRelease',
      component: resolve => require(['@/admin/ScientificResearchTopic/page/FileRelease'], resolve),
      meta: '文件发布'
    }
  ]
}

export default router
