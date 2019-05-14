<template>
  <div class="homePage">
    <icon-list :icons="list"></icon-list>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhuanliicon"></use>
    </svg> -->
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
              icon: 'icon-lingdaobangong',
              path: '/LeadingOffice'
            },
            {
              name: '专家评审',
              icon: 'icon-yonghuzhongxinicon',
              path: '/ExpertReview'
            },
            {
              name: '系统维护',
              icon: 'icon-xitongweihu',
              path: '/SystemMaintenance'
            },
            {
              name: '系统日志',
              icon: 'icon-Page2',
              path: '/'
            }
          ]
        },
        {
          title: '系统用户',
          children: [
            {
              name: '用户中心',
              icon: 'icon-yonghuzhongxinicon_',
              path: '/UserCenter'
            },
            {
              name: '通知公告',
              icon: 'icon-tongzhiwenjianicon',
              path: '/Notic'
            },
            {
              name: '政策法规',
              icon: 'icon-zhengcefaguiicon',
              path: '/policy'
            },
            {
              name: '科研服务',
              icon: 'icon-keyanzhushouicon',
              path: '/scientificServing'
            }
          ]
        },
        {
          title: '申报评审',
          children: [
            {
              name: '科研课题',
              icon: 'icon-keyanketiicon',
              path: '/ScientificResearchTopic'
            },
            {
              name: '学科基地',
              icon: 'icon-zhongdianxuekeicon',
              path: '/ScientificResearchTopic'
            },
            {
              name: '人才计划',
              icon: 'icon-youxiurencaiicon',
              path: '/ScientificResearchTopic'
            },
            {
              name: '科技奖励',
              icon: 'icon-keyanjidiicon',
              path: '/ScientificResearchTopic'
            }
          ]
        },
        {
          title: '过程管理',
          children: [
            {
              name: '项目管理',
              icon: 'icon-chengguoguanliicon',
              path: '/ProjectManagement'
            },
            {
              name: '事项管理',
              icon: 'icon-shixiangshenpiicon',
              path: '/ItemsManagement'
            },
            {
              name: '经费管理',
              icon: 'icon-jingfeiguanliicon',
              path: '/FundManagement'
            },
            {
              name: '成果管理',
              icon: 'icon-shixiangshenpiicon_',
              path: '/ManagementOfAchievement'
            }
          ]
        },
        {
          title: '管理应用',
          children: [
            {
              name: '保障支撑',
              icon: 'icon-baozhangzhichiicon',
              path: '/SecuritySupport'
            },
            {
              name: '评估决策',
              icon: 'icon-pinggujueceicon',
              path: '/EvaluationDecision'
            },
            {
              name: '数据报表',
              icon: 'icon-shujubaobiaoicon',
              path: '/DataReport'
            },
            {
              name: '电子档案',
              icon: 'icon-dianzidanganicon',
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

<style lang="stylus" scoped>
.homePage
  padding-top .1rem
</style>
