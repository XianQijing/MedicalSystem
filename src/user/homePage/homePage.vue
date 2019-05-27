<template>
  <div class="homePage">
    <div class="icon-wrapper">
      <CTitle>
        重要通知
        <div slot="float">更多<IconSvg iconClass="icon-right"/></div>
      </CTitle>
      <div class="swiper-wrapper">
        <user-swiper :list="swiperList"></user-swiper>
      </div>
      <icon-list :icons="list"></icon-list>
    </div>
    <div class="shangBiao">
      <div>
        <img src="./icon.png" width="22" alt="">
        <span>技术支持</span><span>上海润银软件有限公司</span>
      </div>
    </div>
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
              icon: 'icon-yonghuzhongxinicon_',
              path: '/UserCenter'
            },
            {
              name: '通知公告',
              icon: 'icon-tongzhiwenjianicon',
              path: '/notic'
            },
            {
              name: '政策法规',
              icon: 'icon-zhengcefaguiicon',
              path: '/policy'
            },
            {
              name: '科研服务',
              icon: 'icon-keyanzhushouicon',
              path: '/ScientificServing'
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
              path: '/DisciplineBase'
            },
            {
              name: '人才计划',
              icon: 'icon-youxiurencaiicon',
              path: '/TalentPlan'
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
.homePage
  height 100%
.swiper-wrapper
  padding 0 6px
  box-sizing border-box
  width 100%
.iconfont
  font-size .16rem
.icon-wrapper
  min-height 100%
.shangBiao
  width 100%
  position relative
  bottom 0px
  margin -60px auto 0 auto
  clear: both;
  font-size .16rem
  div
    width 80%
    max-width 4.44rem
    margin 0 auto
    span
      line-height .26rem
      margin-left 1em
    img
      vertical-align text-bottom
</style>
