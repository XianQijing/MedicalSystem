<template>
  <div class="homePage">
    <user-title>
      重要通知
      <div slot="float">更多<i class="iconfont">&#xe7eb;</i></div>
    </user-title>
    <div class="swiper-wrapper">
      <user-swiper :list="swiperList"></user-swiper>
    </div>
    <icon-list :icons="list"></icon-list>
  </div>
</template>

<script>
import IconList from '@/components/iconList/iconList'
import UserTitle from '@/components/title/title'
import UserSwiper from './components/swiper'
export default {
  name: 'HomePage',
  data () {
    return {
      list: [
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
              path: '/notic'
            },
            {
              name: '政策法规',
              icon: 'policy',
              path: '/policy'
            },
            {
              name: '科研服务',
              icon: 'service',
              path: '/ScientificServing'
            }
          ]
        },
        {
          title: '项目申报',
          children: [
            {
              name: '科研课题',
              icon: 'tScientificResearchTopicopic',
              path: '/'
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
      ],
      swiperList: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  components: {
    IconList,
    UserTitle,
    UserSwiper
  }
}
</script>

<style lang="stylus" scoped>
.homePage >>> .float
  color: #2873FF;
  font-size: 13px;
.swiper-wrapper
  padding 0 6px
  box-sizing border-box
  width 100%
</style>
