import ElectronicArchives from '@/user/ElectronicArchives/ElectronicArchives'

const router = {
  path: '/ElectronicArchives',
  // name: 'ElectronicArchives',
  component: ElectronicArchives,
  children: [
    {
      path: '',
      name: 'File',
      component: resolve => require(['@/user/ElectronicArchives/page/File'], resolve),
      meta: '科研档案'
    },
    {
      path: 'jumpPage',
      name: 'JumpPage',
      component: resolve => require(['@/user/ElectronicArchives/page/jumpPage'], resolve)
      // meta: '科研档案'
    },
    {
      path: 'fileList',
      name: 'FileList',
      component: resolve => require(['@/user/ElectronicArchives/page/fileList'], resolve),
      meta: '档案列表'
    },
    {
      path: 'fileList1',
      name: 'FileList1',
      component: resolve => require(['@/user/ElectronicArchives/page/fileList1'], resolve),
      meta: '档案列表'
    },
    {
      path: 'FileScientificTopic',
      name: 'FileScientificTopic',
      component: resolve => require(['@/user/ElectronicArchives/page/FileScientificTopic'], resolve),
      meta: '科研课题'
    },
    {
      path: 'ActivityList',
      name: 'ActivityList',
      component: resolve => require(['@/user/ElectronicArchives/page/ActivityList'], resolve)
      // meta: '国家级活动'
    },
    {
      path: 'TeachingMaterial',
      name: 'TeachingMaterial',
      component: resolve => require(['@/user/ElectronicArchives/page/TeachingMaterial'], resolve),
      meta: '高等院校教材'
    },
    {
      path: 'InventionPatent',
      name: 'InventionPatent',
      component: resolve => require(['@/user/ElectronicArchives/page/InventionPatent'], resolve),
      meta: '发明专利'
    },
    {
      path: 'SocialService',
      name: 'SocialService',
      component: resolve => require(['@/user/ElectronicArchives/page/SocialService'], resolve),
      meta: '社会任职'
    }
  ]
}

export default router
