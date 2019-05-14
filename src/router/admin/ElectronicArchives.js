import ElectronicArchives from '@/admin/ElectronicArchives/ElectronicArchives'

const router = {
  path: '/ElectronicArchives',
  // name: 'ElectronicArchives',
  component: ElectronicArchives,
  children: [
    {
      path: '',
      name: 'File',
      component: resolve => require(['@/admin/ElectronicArchives/page/File'], resolve),
      meta: {
        title: '科研档案',
        requireAuth: true
      }
    },
    {
      path: 'jumpPage',
      name: 'JumpPage',
      component: resolve => require(['@/admin/ElectronicArchives/page/jumpPage'], resolve),
      meta: {
        title: '',
        requireAuth: true
      }
    },
    {
      path: 'fileList',
      name: 'FileList',
      component: resolve => require(['@/admin/ElectronicArchives/page/fileList'], resolve),
      meta: {
        title: '档案列表',
        requireAuth: true
      }
    },
    {
      path: 'fileList1',
      name: 'FileList1',
      component: resolve => require(['@/admin/ElectronicArchives/page/fileList1'], resolve),
      meta: {
        title: '档案列表',
        requireAuth: true
      }
    },
    {
      path: 'FileScientificTopic',
      name: 'FileScientificTopic',
      component: resolve => require(['@/admin/ElectronicArchives/page/FileScientificTopic'], resolve),
      meta: {
        title: '科研课题',
        requireAuth: true
      }
    },
    {
      path: 'ActivityList',
      name: 'ActivityList',
      component: resolve => require(['@/admin/ElectronicArchives/page/ActivityList'], resolve),
      meta: {
        title: '',
        requireAuth: true
      }
    },
    {
      path: 'TeachingMaterial',
      name: 'TeachingMaterial',
      component: resolve => require(['@/admin/ElectronicArchives/page/TeachingMaterial'], resolve),
      meta: {
        title: '高等院校教材',
        requireAuth: true
      }
    },
    {
      path: 'InventionPatent',
      name: 'InventionPatent',
      component: resolve => require(['@/admin/ElectronicArchives/page/InventionPatent'], resolve),
      meta: {
        title: '发明专利',
        requireAuth: true
      }
    },
    {
      path: 'SocialService',
      name: 'SocialService',
      component: resolve => require(['@/admin/ElectronicArchives/page/SocialService'], resolve),
      meta: {
        title: '社会任职',
        requireAuth: true
      }
    }
  ]
}

export default router
