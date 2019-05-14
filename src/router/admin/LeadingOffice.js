import LeadingOffice from '@/admin/LeadingOffice/LeadingOffice'

const router = {
  path: '/LeadingOffice',
  component: LeadingOffice,
  children: [
    {
      path: '',
      name: 'LeadingOffice',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/LeadingOffice'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'Leading',
      name: 'Leading',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/Leading'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficeAbroad',
      name: 'OfficeAbroad',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeAbroad'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficeMeeting',
      name: 'OfficeMeeting',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMeeting'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficePaper',
      name: 'OfficePaper',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePaper'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficePatent',
      name: 'OfficePatent',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficePatent'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficeMonograph',
      name: 'OfficeMonograph',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeMonograph'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficeFunds',
      name: 'OfficeFunds',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeFunds'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'OfficeServing',
      name: 'OfficeServing',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/OfficeServing'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'Cooperation',
      name: 'Cooperation',
      component: resolve => require(['@/admin/LeadingOffice/LeadingOffice/Cooperation'], resolve),
      meta: {
        // title: '院长办公',
        requireAuth: true
      }
    },
    {
      path: 'ProjectApproval',
      name: 'ProjectApproval1',
      component: resolve => require(['@/admin/LeadingOffice/ProjectApproval'], resolve),
      meta: {
        // title: '项目审批',
        requireAuth: true
      }
    },
    {
      path: 'MattersApproval',
      name: 'MattersApproval',
      component: resolve => require(['@/admin/LeadingOffice/MattersApproval'], resolve),
      meta: {
        // title: '事项审批',
        requireAuth: true
      }
    },
    {
      path: 'FundingApproval',
      name: 'FundingApproval1',
      component: resolve => require(['@/admin/LeadingOffice/FundingApproval'], resolve),
      meta: {
        // title: '经费审批',
        requireAuth: true
      }
    }
  ]
}

export default router
