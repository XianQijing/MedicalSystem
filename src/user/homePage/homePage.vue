<template>
  <div class="homePage">
    <CTitle>
      重要通知
      <div slot="float">更多<i class="iconfont">&#xe7eb;</i></div>
    </CTitle>
    <div class="swiper-wrapper">
      <user-swiper :list="swiperList"></user-swiper>
    </div>
    <icon-list :icons="list"></icon-list>
  </div>
</template>

<script>
import IconList from '@/components/iconList/iconList'
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
              icon: '&#xe62a;',
              path: '/UserCenter'
            },
            {
              name: '通知公告',
              icon: '&#xe62d;',
              path: '/notic'
            },
            {
              name: '政策法规',
              icon: '&#xe623;',
              path: '/policy'
            },
            {
              name: '科研服务',
              icon: '&#xe631;',
              path: '/ScientificServing'
            }
          ]
        },
        {
          title: '项目申报',
          children: [
            {
              name: '科研课题',
              icon: '&#xe626;',
              path: '/ScientificResearchTopic'
            },
            {
              name: '学科基地',
              icon: '&#xe635;',
              path: '/ScientificResearchTopic'
            },
            {
              name: '优秀人才',
              icon: '&#xe62e;',
              path: '/ScientificResearchTopic'
            },
            {
              name: '科技奖励',
              icon: '&#xe627;',
              path: '/ScientificResearchTopic'
            }
          ]
        },
        {
          title: '过程管理',
          children: [
            {
              name: '项目管理',
              icon: '&#xe62f;',
              path: '/ProjectManagement'
            },
            {
              name: '事项管理',
              icon: '&#xe628;',
              path: '/ItemsManagement'
            },
            {
              name: '经费管理',
              icon: '&#xe633;',
              path: '/FundManagement'
            },
            {
              name: '成果管理',
              icon: '&#xe62c;',
              path: '/ManagementOfAchievement'
            }
          ]
        },
        {
          title: '管理应用',
          children: [
            {
              name: '保障支撑',
              icon: '&#xe62b;',
              path: '/SecuritySupport'
            },
            {
              name: '评估决策',
              icon: '&#xe624;',
              path: '/EvaluationDecision'
            },
            {
              name: '数据报表',
              icon: '&#xe622;',
              path: '/DataReport'
            },
            {
              name: '电子档案',
              icon: '&#xe634;',
              path: '/ElectronicArchives'
            }
          ]
        }
      ],
      swiperList: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  components: {
    IconList,
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
.iconfont
  font-size .16rem
</style>
