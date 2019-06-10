// 经费管理路由文件
import Layout from '@/layout/layout'

const router = {
  path: '/FundManagement',
  // name: 'FundManagement',
  component: Layout,
  redirect: '',
  children: [
    {
      path: '',
      name: 'ProjectFunds',
      component: resolve => require(['@/admin/FundManagement/ProjectFunds/ProjectFunds'], resolve),
      meta: {
        title: '项目经费',
        requireAuth: true
      }
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/admin/FundManagement/ProjectBudget/ProjectBudget'], resolve),
      meta: {
        title: '经费预算',
        requireAuth: true
      }
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval',
      component: resolve => require(['@/admin/FundManagement/FundingApproval/FundingApproval'], resolve),
      meta: {
        title: '经费审批',
        requireAuth: true
      }
    },
    {
      path: 'ReimbursementAudit',
      name: 'ReimbursementAudit',
      component: resolve => require(['@/admin/FundManagement/ReimbursementAudit/Reimbursement'], resolve),
      meta: {
        title: '报销审核',
        requireAuth: true
      }
    },
    {
      path: 'ReimbursementAuditDetail',
      name: 'ReimbursementAuditDetail',
      component: resolve => require(['@/admin/FundManagement/ReimbursementAudit/page/ReimbursementAuditDetail'], resolve),
      meta: {
        title: '报销审核',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'FundingDetails',
      name: 'FundingDetails',
      component: resolve => require(['@/admin/FundManagement/page/FundingDetails'], resolve),
      meta: {
        title: '经费明细',
        requireAuth: true
      }
    },
    {
      path: 'BalanceOfFunds',
      name: 'BalanceOfFunds',
      component: resolve => require(['@/admin/FundManagement/page/BalanceOfFunds'], resolve),
      meta: {
        title: '经费余额',
        requireAuth: true
      }
    },
    {
      path: 'FundsFinalAccounts',
      name: 'FundsFinalAccounts',
      component: resolve => require(['@/admin/FundManagement/page/FundsFinalAccounts'], resolve),
      meta: {
        title: '经费决算',
        requireAuth: true
      }
    },
    {
      path: 'FundManagement1',
      name: 'FundManagement1',
      component: resolve => require(['@/admin/FundManagement/FundManagement/FundManagement1'], resolve),
      meta: {
        title: '管理经费',
        requireAuth: true
      }
    },
    {
      path: 'Performance',
      name: 'Performance',
      component: resolve => require(['@/admin/FundManagement/Performance/Performance'], resolve),
      meta: {
        title: '绩效经费',
        requireAuth: true
      }
    },
    // {
    //   path: 'FundSearch',
    //   name: 'FundSearch',
    //   component: resolve => require(['@/admin/FundManagement/FundSearch/FundSearch'], resolve),
    //   meta: {
    //     title: '经费查询',
    //     requireAuth: true
    //   }
    // },
    {
      path: 'FundingAuditDetail',
      name: 'FundingAuditDetail',
      component: resolve => require(['@/admin/FundManagement/FundManagement/page/FundingAuditDetail'], resolve),
      meta: {
        title: '经费管理',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'PerformanceDetail.vue',
      name: 'PerformanceDetail.vue',
      component: resolve => require(['@/admin/FundManagement/Performance/page/PerformanceDetail.vue'], resolve),
      meta: {
        title: '经费管理',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'FundsFinalAccountsDetail',
      name: 'FundsFinalAccountsDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundsFinalAccountsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'WatchFundingDetails',
      name: 'WatchFundingDetails',
      component: resolve => require(['@/admin/FundManagement/page/WatchFundingDetails'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'FundingApprovalDetail',
      name: 'FundingApprovalDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundingApprovalDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BalanceOfFundsDetail',
      name: 'BalanceOfFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/BalanceOfFundsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'hadUseDetail',
      name: 'HadUseDetail',
      component: resolve => require(['@/admin/FundManagement/FundingApproval/page/hadUseDetail'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BudegetStatues',
      name: 'BudegetStatues',
      component: resolve => require(['@/admin/FundManagement/page/BudegetStatues'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ProjectFundsDetail',
      name: 'ProjectFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/ProjectFundsDetail'], resolve),
      meta: {
        title: '经费录入',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
