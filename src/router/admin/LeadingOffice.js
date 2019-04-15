import LeadingOffice from '@/admin/LeadingOffice/LeadingOffice'

const router = {
  path: '/LeadingOffice',
  component: LeadingOffice,
  children: [
    {
      path: '',
      name: 'LeadingOffice',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/LeadingOffice'], resolve),
      meta: '院长办公'
    },
    {
      path: 'Leading',
      name: 'Leading',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/Leading'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficeAbroad',
      name: 'OfficeAbroad',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeAbroad'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficeMeeting',
      name: 'OfficeMeeting',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMeeting'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficePaper',
      name: 'OfficePaper',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePaper'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficePatent',
      name: 'OfficePatent',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePatent'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficeMonograph',
      name: 'OfficeMonograph',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMonograph'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficeFunds',
      name: 'OfficeFunds',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeFunds'], resolve),
      meta: '院长办公'
    },
    {
      path: 'OfficeServing',
      name: 'OfficeServing',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeServing'], resolve),
      meta: '院长办公'
    },
    {
      path: 'Cooperation',
      name: 'Cooperation',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/Cooperation'], resolve),
      meta: '院长办公'
    },
    {
      path: 'ProjectApproval',
      name: 'ProjectApproval1',
      component: resolve => require(['@/admin/LeadingOffice/ProjectApproval'], resolve),
      meta: '项目审批'
    },
    {
      path: 'MattersApproval',
      name: 'MattersApproval',
      component: resolve => require(['@/admin/LeadingOffice/MattersApproval'], resolve),
      meta: '事项审批'
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval1',
      component: resolve => require(['@/admin/LeadingOffice/FundingApproval'], resolve),
      meta: '经费审批'
    }
  ]
}

export default router
