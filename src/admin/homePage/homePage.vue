<template>
  <div class="homePage">
    <icon-list :icons="list"></icon-list>
  </div>
</template>

<script>
import IconList from '@/components/iconList/iconList'
export default {
  name: 'HomePage',
  data () {
    return {
      list: [
        {
          title: '系统管理',
          children: [
            {
              name: '领导办公',
              icon: 'boss',
              path: '/LeadingOffice'
            },
            {
              name: '专家评审',
              icon: 'expert',
              path: '/ExpertReview'
            },
            {
              name: '系统维护',
              icon: 'maintenance',
              path: '/SystemMaintenance'
            },
            {
              name: '系统日志',
              icon: 'log',
              path: '/'
            }
          ]
        },
        {
          title: '系统用户',
          children: [
            {
              name: '用户中心',
              icon: 'center',
              path: '/UserCenter'
            },
            {
              name: '通知公告',
              icon: 'notic',
              path: '/Notic'
            },
            {
              name: '政策法规',
              icon: 'policy',
              path: '/policy'
            },
            {
              name: '科研服务',
              icon: 'service',
              path: '/scientificServing'
            }
          ]
        },
        {
          title: '项目申报',
          children: [
            {
              name: '科研课题',
              icon: 'topic',
              path: '/ScientificResearchTopic'
            },
            {
              name: '学科基地',
              icon: 'subject',
              path: '/ScientificResearchTopic'
            },
            {
              name: '优秀人才',
              icon: 'personnel',
              path: '/ScientificResearchTopic'
            },
            {
              name: '科技奖励',
              icon: 'base',
              path: '/ScientificResearchTopic'
            }
          ]
        },
        {
          title: '过程管理',
          children: [
            {
              name: '项目管理',
              icon: 'project',
              path: '/ProjectManagement'
            },
            {
              name: '事项管理',
              icon: 'matter',
              path: '/ItemsManagement'
            },
            {
              name: '经费管理',
              icon: 'funds',
              path: '/FundManagement'
            },
            {
              name: '成果管理',
              icon: 'result',
              path: '/ManagementOfAchievement'
            }
          ]
        },
        {
          title: '管理应用',
          children: [
            {
              name: '保障支撑',
              icon: 'support',
              path: '/SecuritySupport'
            },
            {
              name: '评估决策',
              icon: 'decisions',
              path: '/EvaluationDecision'
            },
            {
              name: '数据报表',
              icon: 'report',
              path: '/DataReport'
            },
            {
              name: '电子档案',
              icon: 'archives',
              path: '/ElectronicArchives'
            }
          ]
        }
      ]
    }
  },
  components: {
    IconList
  }
}
</script>
