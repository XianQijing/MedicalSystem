// 经费管理路由文件
import Layout from '@/layout/layout'

const router = {
  path: '/FundManagement',
  component: Layout,
  redirect: '',
  children: [
    {
      path: '',
      name: 'ProjectFunds',
      component: resolve => require(['@/user/FundManagement/page/ProjectFunds'], resolve),
      meta: {
        title: '项目经费',
        requireAuth: true
      }
    },
    {
      path: 'ProjectBudget',
      name: 'ProjectBudget',
      component: resolve => require(['@/user/FundManagement/page/ProjectBudget'], resolve),
      meta: {
        title: '经费预算',
        requireAuth: true
      }
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval',
      component: resolve => require(['@/user/FundManagement/page/FundingApproval'], resolve),
      meta: {
        title: '经费审批',
        requireAuth: true
      }
    },
    {
      path: 'ApplicationForReimbursement',
      name: 'ApplicationForReimbursement',
      component: resolve => require(['@/user/FundManagement/ApplicationForReimbursement/ApplicationForReimbursement'], resolve),
      meta: {
        title: '报销申请',
        requireAuth: true
      }
    },
    {
      path: 'FundingDetails',
      name: 'FundingDetails',
      component: resolve => require(['@/user/FundManagement/page/FundingDetails'], resolve),
      meta: {
        title: '经费明细',
        requireAuth: true
      }
    },
    {
      path: 'ApplicationPort',
      name: 'ApplicationPort',
      component: resolve => require(['@/user/FundManagement/ApplicationForReimbursement/ApplicationPort'], resolve),
      meta: {
        title: '申报端口',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'StatusSearch',
      name: 'StatusSearch',
      component: resolve => require(['@/user/FundManagement/page/StatusSearch'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BalanceOfFunds',
      name: 'BalanceOfFunds',
      component: resolve => require(['@/user/FundManagement/page/BalanceOfFunds'], resolve),
      meta: {
        title: '经费余额',
        requireAuth: true
      }
    },
    {
      path: 'FundsFinalAccounts',
      name: 'FundsFinalAccounts',
      component: resolve => require(['@/user/FundManagement/page/FundsFinalAccounts'], resolve),
      meta: {
        title: '经费决算',
        requireAuth: true
      }
    },
    {
      path: 'FundsFinalAccountsDetail',
      name: 'FundsFinalAccountsDetail',
      component: resolve => require(['@/user/FundManagement/page/FundsFinalAccountsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'WatchFundingDetails',
      name: 'WatchFundingDetails',
      component: resolve => require(['@/user/FundManagement/page/WatchFundingDetails'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BalanceOfFundsDetail',
      name: 'BalanceOfFundsDetail',
      component: resolve => require(['@/user/FundManagement/page/BalanceOfFundsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'StateSearchDetail',
      name: 'StateSearchDetail',
      component: resolve => require(['@/user/FundManagement/page/StateSearchDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'Budget',
      name: 'Budget',
      component: resolve => require(['@/user/FundManagement/page/Budget'], resolve),
      meta: {
        title: '直接经费',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'BudegetStatues',
      name: 'BudegetStatues',
      component: resolve => require(['@/user/FundManagement/page/BudegetStatues'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ProjectFundsDetail',
      name: 'ProjectFundsDetail',
      component: resolve => require(['@/user/FundManagement/page/ProjectFundsDetail'], resolve),
      meta: {
        title: '查看详情',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'AmountOfFunds',
      name: 'AmountOfFunds',
      component: resolve => require(['@/user/FundManagement/page/AmountOfFunds'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
