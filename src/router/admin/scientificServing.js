// 科研服务路由
import ScientificServing from '@/page/scientificService/scientificService.vue'

const scientificServing = {
  path: '/scientificServing',
  name: 'ScientificServing',
  component: ScientificServing,
  children: [
    {
      path: '',
      name: 'SCI',
      component: resolve => require(['@/page/scientificService/page/SCI'], resolve),
      meta: 'SCI期刊'
    }
  ]
}

export default scientificServing
