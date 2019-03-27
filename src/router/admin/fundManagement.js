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
      meta: '报销审核'
    },
    {
      path: 'ReimbursementAuditDetail',
      name: 'ReimbursementAuditDetail',
      component: resolve => require(['@/admin/FundManagement/page/ReimbursementAuditDetail'], resolve),
      meta: '报销审核'
    },
    {
      path: 'FundManagement1',
      name: 'FundManagement1',
      component: resolve => require(['@/admin/FundManagement/page/FundManagement1'], resolve),
      meta: '经费管理'
    },
    {
      path: 'FundingAuditDetail',
      name: 'FundingAuditDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundingAuditDetail'], resolve),
      meta: '经费管理'
    },
    {
      path: 'FundsFinalAccounts',
      name: 'FundsFinalAccounts',
      component: resolve => require(['@/admin/FundManagement/page/FundsFinalAccounts'], resolve),
      meta: '经费决算'
    },
    {
      path: 'FundsFinalAccountsDetail',
      name: 'FundsFinalAccountsDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundsFinalAccountsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'FundingDetails',
      name: 'FundingDetails',
      component: resolve => require(['@/admin/FundManagement/page/FundingDetails'], resolve),
      meta: '经费明细'
    },
    {
      path: 'WatchFundingDetails',
      name: 'WatchFundingDetails',
      component: resolve => require(['@/admin/FundManagement/page/WatchFundingDetails'], resolve),
      meta: '查看详情'
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval',
      component: resolve => require(['@/admin/FundManagement/page/FundingApproval'], resolve),
      meta: '经费审批'
    },
    {
      path: 'FundingApprovalDetail',
      name: 'FundingApprovalDetail',
      component: resolve => require(['@/admin/FundManagement/page/FundingApprovalDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'BalanceOfFunds',
      name: 'BalanceOfFunds',
      component: resolve => require(['@/admin/FundManagement/page/BalanceOfFunds'], resolve),
      meta: '经费余额'
    },
    {
      path: 'BalanceOfFundsDetail',
      name: 'BalanceOfFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/BalanceOfFundsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/admin/FundManagement/page/ProjectBudget'], resolve),
      meta: '项目预算'
    },
    {
      path: 'BudegetStatues',
      name: 'BudegetStatues',
      component: resolve => require(['@/admin/FundManagement/page/BudegetStatues'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectFunds',
      name: 'ProjectFunds',
      component: resolve => require(['@/admin/FundManagement/page/ProjectFunds'], resolve),
      meta: '项目经费'
    },
    {
      path: 'ProjectFundsDetail',
      name: 'ProjectFundsDetail',
      component: resolve => require(['@/admin/FundManagement/page/ProjectFundsDetail'], resolve),
      meta: '经费录入'
    }
  ]
}

export default router
