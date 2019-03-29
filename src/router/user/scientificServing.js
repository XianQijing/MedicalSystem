// 科研服务路由
import ScientificServing from '@/page/scientificService/scientificService.vue'

const scientificServing = {
  path: '/scientificServing',
  component: ScientificServing,
  children: [
    {
      path: '',
      name: 'SCI',
      component: resolve => require(['@/page/scientificService/page/SCI'], resolve),
      meta: 'SCI期刊'
    },
    {
      path: 'catalog',
      name: 'Catalog',
      component: resolve => require(['@/page/scientificService/page/Catalog'], resolve)
    },
    {
      path: 'library',
      name: 'Library',
      component: resolve => require(['@/page/scientificService/page/library'], resolve)
    },
    {
      path: 'international',
      name: 'International',
      component: resolve => require(['@/page/scientificService/page/international'], resolve)
    },
    {
      path: 'ranking',
      name: 'Ranking',
      component: resolve => require(['@/page/scientificService/page/ranking'], resolve),
      meta: 'SCI期刊排名'
    },
    {
      path: 'journalRanking',
      name: 'JournalRanking',
      component: resolve => require(['@/page/scientificService/page/journalRanking'], resolve),
      meta: 'SCI期刊排名'
    },
    {
      path: 'influence',
      name: 'Influence',
      component: resolve => require(['@/page/scientificService/page/influence'], resolve),
      meta: '影响因子'
    }
  ]
}

export default scientificServing
