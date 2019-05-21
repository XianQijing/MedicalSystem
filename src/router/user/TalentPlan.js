import TalentPlan from '@/user/TalentPlan/TalentPlan'

const router = {
  path: '/TalentPlan',
  // name: 'ScientificResearchTopic',
  component: TalentPlan,
  children: [
    {
      path: '',
      name: 'TalentGuide',
      component: resolve => require(['@/user/DisciplineBase/DisciplineGuide/DisciplineGuide'], resolve),
      meta: {
        title: '人才指南',
        requireAuth: true
      }
    },
    {
      path: 'TalentDeclaration',
      name: 'TalentDeclaration',
      component: resolve => require(['@/user/DisciplineBase/DisciplineDeclaration/DisciplineDeclaration'], resolve),
      meta: {
        title: '学科申报',
        requireAuth: true
      }
    }
  ]
}

export default router
