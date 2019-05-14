// 科研服务路由
import ScientificServing from '@/page/scientificService/scientificService.vue'

const scientificServing = {
  path: '/scientificServing',
  // name: 'ScientificServing',
  component: ScientificServing,
  children: [
    {
      path: '',
      name: 'SCI',
      component: resolve => require(['@/page/scientificService/page/SCI'], resolve),
      meta: {
        title: 'SCI期刊',
        requireAuth: true
      }
    },
    {
      path: 'catalog',
      name: 'Catalog',
      component: resolve => require(['@/page/scientificService/page/Catalog'], resolve),
      meta: {
        requireAuth: true
      }
    },
    {
      path: 'library',
      name: 'Library',
      component: resolve => require(['@/page/scientificService/page/library'], resolve),
      meta: {
        requireAuth: true
      }
    },
    {
      path: 'international',
      name: 'International',
      component: resolve => require(['@/page/scientificService/page/international'], resolve),
      meta: {
        requireAuth: true
      }
    },
    {
      path: 'ranking',
      name: 'Ranking',
      component: resolve => require(['@/page/scientificService/page/ranking'], resolve),
      meta: {
        title: 'SCI期刊排名',
        requireAuth: true
      }
    },
    {
      path: 'journalRanking',
      name: 'JournalRanking',
      component: resolve => require(['@/page/scientificService/page/journalRanking'], resolve),
      meta: {
        title: 'SCI期刊排名',
        requireAuth: true
      }
    },
    {
      path: 'influence',
      name: 'Influence',
      component: resolve => require(['@/page/scientificService/page/influence'], resolve),
      meta: {
        title: '影响因子',
        requireAuth: true
      }
    }
  ]
}

export default scientificServing
