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
              path: '/'
            },
            {
              name: '专家评审',
              icon: 'expert',
              path: '/'
            },
            {
              name: '系统维护',
              icon: 'maintenance',
              path: '/'
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
              path: '/'
            },
            {
              name: '重点学科',
              icon: 'subject',
              path: '/'
            },
            {
              name: '优秀人才',
              icon: 'personnel',
              path: '/'
            },
            {
              name: '科研基地',
              icon: 'base',
              path: '/'
            }
          ]
        },
        {
          title: '过程管理',
          children: [
            {
              name: '项目管理',
              icon: 'project',
              path: '/'
            },
            {
              name: '事项管理',
              icon: 'matter',
              path: '/'
            },
            {
              name: '经费管理',
              icon: 'funds',
              path: '/'
            },
            {
              name: '成果管理',
              icon: 'result',
              path: '/'
            }
          ]
        },
        {
          title: '管理应用',
          children: [
            {
              name: '保障支持',
              icon: 'support',
              path: '/'
            },
            {
              name: '评估决策',
              icon: 'decisions',
              path: '/'
            },
            {
              name: '数据报表',
              icon: 'report',
              path: '/'
            },
            {
              name: '电子档案',
              icon: 'archives',
              path: '/'
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
