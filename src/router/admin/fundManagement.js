// 经费管理路由文件
import FundManagement from '@/admin/FundManagement/FundManagement'

const router = {
  path: '/FundManagement',
  name: 'FundManagement',
  component: FundManagement,
  redirect: '',
  children: [
    {
      path: '',
      name: 'ApplicationForReimbursement',
      component: resolve => require(['@/admin/FundManagement/page/ApplicationForReimbursement'], resolve),
      meta: '报销申请'
    },
    {
      path: 'ApplicationPort',
      name: 'ApplicationPort',
      component: resolve => require(['@/admin/FundManagement/page/ApplicationPort'], resolve),
      meta: '申报端口'
    },
    {
      path: 'StatusSearch',
      name: 'StatusSearch',
      component: resolve => require(['@/admin/FundManagement/page/StatusSearch'], resolve),
      meta: '查看详情'
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
      path: 'StateSearchDetail',
      name: 'StateSearchDetail',
      component: resolve => require(['@/admin/FundManagement/page/StateSearchDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/admin/FundManagement/page/ProjectBudget'], resolve),
      meta: '项目预算'
    },
    {
      path: 'Budget',
      name: 'Budget',
      component: resolve => require(['@/admin/FundManagement/page/Budget'], resolve),
      meta: '直接经费'
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
      meta: '查看详情'
    },
    {
      path: 'AmountOfFunds',
      name: 'AmountOfFunds',
      component: resolve => require(['@/admin/FundManagement/page/AmountOfFunds'], resolve)
    }
  ]
}

export default router
