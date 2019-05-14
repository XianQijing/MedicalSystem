// 经费管理路由文件
import FundManagement from '@/admin/FundManagement/FundManagement'

const router = {
  path: '/FundManagement',
  // name: 'FundManagement',
  component: FundManagement,
  redirect: '',
  children: [
    {
      path: '',
      name: 'ReimbursementAudit',
      component: resolve => require(['@/admin/FundManagement/page/ReimbursementAudit'], resolve),
      meta: {
        title: '报销审核',
        requireAuth: true
      }
    },
    {
      path: 'ReimbursementAuditDetail',
      name: 'ReimbursementAuditDetail',
      component: resolve => require(['@/admin/FundManagement/page/ReimbursementAuditDetail'], resolve),
      meta: {
        title: '报销审核',
        requireAuth: true
      }
    },
    {
      path: 'FundManagement1',
      name: 'FundManagement1',
      component: resolve => require(['@/admin/FundManagement/page/FundManagement1'], resolve),
      meta: {
        title: '经费管理',
        requireAuth: true
      }
    },
    {
      path: 'FundingAuditDetail',
      name: 'FundingAuditDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundingAuditDetail'], resolve),
      meta: {
        title: '经费管理',
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
      path: 'FundsFinalAccountsDetail',
      name: 'FundsFinalAccountsDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundsFinalAccountsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
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
      path: 'WatchFundingDetails',
      name: 'WatchFundingDetails',
      component: resolve => require(['@/admin/FundManagement/page/WatchFundingDetails'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval',
      component: resolve => require(['@/admin/FundManagement/page/FundingApproval'], resolve),
      meta: {
        title: '经费审批',
        requireAuth: true
      }
    },
    {
      path: 'FundingApprovalDetail',
      name: 'FundingApprovalDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundingApprovalDetail'], resolve),
      meta: {
        title: '查看详情',
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
      path: 'BalanceOfFundsDetail',
      name: 'BalanceOfFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/BalanceOfFundsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/admin/FundManagement/page/ProjectBudget'], resolve),
      meta: {
        title: '项目预算',
        requireAuth: true
      }
    },
    {
      path: 'BudegetStatues',
      name: 'BudegetStatues',
      component: resolve => require(['@/admin/FundManagement/page/BudegetStatues'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true
      }
    },
    {
      path: 'ProjectFunds',
      name: 'ProjectFunds',
      component: resolve => require(['@/admin/FundManagement/page/ProjectFunds'], resolve),
      meta: {
        title: '项目经费',
        requireAuth: true
      }
    },
    {
      path: 'ProjectFundsDetail',
      name: 'ProjectFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/ProjectFundsDetail'], resolve),
      meta: {
        title: '经费录入',
        requireAuth: true
      }
    }
  ]
}

export default router
