// 日常设置
<template>
  <div class="DailySetup">
    <tabs v-model="clickTab">
      <tab title="项目来源设置" name="0">
        <ProjectSource/>
      </tab>
      <tab title="项目状态设置" name="1">
        <ProjectStatus/>
      </tab>
      <tab title="模版设置" name="2">
        <TemplateSettings/>
      </tab>
      <tab title="财务账号设置" name="3">
        <FinancialAccountSetting/>
      </tab>
      <tab title="专家评分表设置" name="4">
        <ExpertRating/>
      </tab>
      <tab title="人才称号" name="5">
        <!-- <FinancialAccountSetting/> -->
        <ProjectSource/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectSource from './ProjectSource'
import ProjectStatus from './ProjectStatus'
import TemplateSettings from './TemplateSettings'
import FinancialAccountSetting from './FinancialAccountSetting'
import ExpertRating from './ExpertRating'
// import LevelFour from './LevelFour'
export default {
  name: 'DailySetup',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProjectSource,
    ProjectStatus,
    TemplateSettings,
    FinancialAccountSetting,
    ExpertRating
    // LevelFour
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.DailySetup >>> .tabs
  .tab-pane
    width calc(100% / 3 - 8px / 3)
    box-sizing: border-box
    height .3rem
    margin-bottom 4px
    &:nth-of-type(n+3)
      margin-bottom 0
.DailySetup
  margin 0 6px
  padding 20px 0 10px 0
</style>
