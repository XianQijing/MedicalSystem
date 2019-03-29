// 经费管理路由文件
import FundManagement from '@/user/FundManagement/FundManagement'

const router = {
  path: '/FundManagement',
  component: FundManagement,
  redirect: '',
  children: [
    {
      path: '',
      name: 'ApplicationForReimbursement',
      component: resolve => require(['@/user/FundManagement/page/ApplicationForReimbursement'], resolve),
      meta: '报销申请'
    },
    {
      path: 'ApplicationPort',
      name: 'ApplicationPort',
      component: resolve => require(['@/user/FundManagement/page/ApplicationPort'], resolve),
      meta: '申报端口'
    },
    {
      path: 'StatusSearch',
      name: 'StatusSearch',
      component: resolve => require(['@/user/FundManagement/page/StatusSearch'], resolve),
      meta: '查看详情'
    },
    {
      path: 'FundsFinalAccounts',
      name: 'FundsFinalAccounts',
      component: resolve => require(['@/user/FundManagement/page/FundsFinalAccounts'], resolve),
      meta: '经费决算'
    },
    {
      path: 'FundsFinalAccountsDetail',
      name: 'FundsFinalAccountsDetail',
      component: resolve => require(['@/user/FundManagement/page/FundsFinalAccountsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'FundingDetails',
      name: 'FundingDetails',
      component: resolve => require(['@/user/FundManagement/page/FundingDetails'], resolve),
      meta: '经费明细'
    },
    {
      path: 'WatchFundingDetails',
      name: 'WatchFundingDetails',
      component: resolve => require(['@/user/FundManagement/page/WatchFundingDetails'], resolve),
      meta: '查看详情'
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval',
      component: resolve => require(['@/user/FundManagement/page/FundingApproval'], resolve),
      meta: '经费审批'
    },
    {
      path: 'BalanceOfFunds',
      name: 'BalanceOfFunds',
      component: resolve => require(['@/user/FundManagement/page/BalanceOfFunds'], resolve),
      meta: '经费余额'
    },
    {
      path: 'BalanceOfFundsDetail',
      name: 'BalanceOfFundsDetail',
      component: resolve => require(['@/user/FundManagement/page/BalanceOfFundsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'StateSearchDetail',
      name: 'StateSearchDetail',
      component: resolve => require(['@/user/FundManagement/page/StateSearchDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/user/FundManagement/page/ProjectBudget'], resolve),
      meta: '项目预算'
    },
    {
      path: 'Budget',
      name: 'Budget',
      component: resolve => require(['@/user/FundManagement/page/Budget'], resolve),
      meta: '直接经费'
    },
    {
      path: 'BudegetStatues',
      name: 'BudegetStatues',
      component: resolve => require(['@/user/FundManagement/page/BudegetStatues'], resolve),
      meta: '查看详情'
    },
    {
      path: 'ProjectFunds',
      name: 'ProjectFunds',
      component: resolve => require(['@/user/FundManagement/page/ProjectFunds'], resolve),
      meta: '项目经费'
    },
    {
      path: 'ProjectFundsDetail',
      name: 'ProjectFundsDetail',
      component: resolve => require(['@/user/FundManagement/page/ProjectFundsDetail'], resolve),
      meta: '查看详情'
    },
    {
      path: 'AmountOfFunds',
      name: 'AmountOfFunds',
      component: resolve => require(['@/user/FundManagement/page/AmountOfFunds'], resolve)
    }
  ]
}

export default router
