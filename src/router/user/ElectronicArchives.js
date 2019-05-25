import Layout from '@/layout/layout'

const router = {
  path: '/ElectronicArchives',
  // name: 'ElectronicArchives',
  component: Layout,
  children: [
    {
      path: '',
      name: 'File',
      component: resolve => require(['@/user/ElectronicArchives/page/File'], resolve),
      meta: {
        title: '科研档案',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'jumpPage',
      name: 'JumpPage',
      component: resolve => require(['@/user/ElectronicArchives/page/jumpPage'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
      // meta: '科研档案'
    },
    {
      path: 'fileList',
      name: 'FileList',
      component: resolve => require(['@/user/ElectronicArchives/page/fileList'], resolve),
      meta: {
        title: '档案列表',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'fileList1',
      name: 'FileList1',
      component: resolve => require(['@/user/ElectronicArchives/page/fileList1'], resolve),
      meta: {
        title: '档案列表',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'FileScientificTopic',
      name: 'FileScientificTopic',
      component: resolve => require(['@/user/ElectronicArchives/page/FileScientificTopic'], resolve),
      meta: {
        title: '科研课题',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ActivityList',
      name: 'ActivityList',
      component: resolve => require(['@/user/ElectronicArchives/page/ActivityList'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
      // meta: '国家级活动'
    },
    {
      path: 'TeachingMaterial',
      name: 'TeachingMaterial',
      component: resolve => require(['@/user/ElectronicArchives/page/TeachingMaterial'], resolve),
      meta: {
        title: '高等院校教材',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'InventionPatent',
      name: 'InventionPatent',
      component: resolve => require(['@/user/ElectronicArchives/page/InventionPatent'], resolve),
      meta: {
        title: '发明专利',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'SocialService',
      name: 'SocialService',
      component: resolve => require(['@/user/ElectronicArchives/page/SocialService'], resolve),
      meta: {
        title: '社会任职',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default router
