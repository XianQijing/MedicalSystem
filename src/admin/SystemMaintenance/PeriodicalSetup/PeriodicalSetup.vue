// 专家设置
<template>
  <div class="ExpertSetup">
    <tabs v-model="clickTab">
      <tab title="SCI期刊" name="0">
        <SCIPeriodical/>
      </tab>
      <tab title="中华系列期刊" name="1">
        <ChineseSeriesPeriodicals/>
      </tab>
      <tab title="核心期刊" name="2">
        <SCIPeriodical/>
      </tab>
      <tab title="非核心期刊" name="3">
        <!-- <AssessmentExpert/> -->
      </tab>
      <tab title="其他期刊" name="4">
        <!-- <AssessmentExpert/> -->
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import SCIPeriodical from './SCIPeriodical'
import ChineseSeriesPeriodicals from './ChineseSeriesPeriodicals'
// import ExpertInformation from './ExpertInformation'
// import AssessmentExpert from './AssessmentExpert'
export default {
  name: 'ExpertSetup',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    SCIPeriodical,
    ChineseSeriesPeriodicals
    // ExpertInformation,
    // AssessmentExpert
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ExpertSetup >>> .tabs
  .tab-pane
    width calc(100% / 2 - 2px)
    box-sizing: border-box
    margin-bottom 4px
    height .3rem
    &:nth-of-type(n+3)
      width calc(100% / 3 - 8px / 3)
      margin-bottom 0
.ExpertSetup
  margin 0 6px
  padding 20px 0 10px 0
</style>
