// 科研服务路由
import Layout from '@/layout/layout'

const scientificServing = {
  path: '/ScientificServing',
  component: Layout,
  children: [
    {
      path: '',
      name: 'SCI',
      component: resolve => require(['@/page/scientificService/page/SCI'], resolve),
      meta: {
        title: 'SCI期刊',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'catalog',
      name: 'Catalog',
      component: resolve => require(['@/page/scientificService/page/Catalog'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'library',
      name: 'Library',
      component: resolve => require(['@/page/scientificService/page/library'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'international',
      name: 'International',
      component: resolve => require(['@/page/scientificService/page/international'], resolve),
      meta: {
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'ranking',
      name: 'Ranking',
      component: resolve => require(['@/page/scientificService/page/ranking'], resolve),
      meta: {
        title: 'SCI期刊排名',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'journalRanking',
      name: 'JournalRanking',
      component: resolve => require(['@/page/scientificService/page/journalRanking'], resolve),
      meta: {
        title: 'SCI期刊排名',
        requireAuth: true,
        hideInMenu: true
      }
    },
    {
      path: 'influence',
      name: 'Influence',
      component: resolve => require(['@/page/scientificService/page/influence'], resolve),
      meta: {
        title: '影响因子',
        requireAuth: true,
        hideInMenu: true
      }
    }
  ]
}

export default scientificServing
