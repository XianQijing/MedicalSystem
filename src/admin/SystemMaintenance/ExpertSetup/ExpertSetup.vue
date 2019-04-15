// 专家设置
<template>
  <div class="ExpertSetup">
    <tabs v-model="clickTab">
      <tab title="评审科室" name="0">
        <EvaluationOffice/>
      </tab>
      <tab title="专家添加" name="1">
        <ExpertAddition/>
      </tab>
      <tab title="专家信息管理" name="2">
        <div class="a">
          <ExpertInformation/>
        </div>
      </tab>
      <tab title="评审专家库" name="3">
        <AssessmentExpert/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import EvaluationOffice from './EvaluationOffice'
import ExpertAddition from './ExpertAddition'
import ExpertInformation from './ExpertInformation'
import AssessmentExpert from './AssessmentExpert'
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
    EvaluationOffice,
    ExpertAddition,
    ExpertInformation,
    AssessmentExpert
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ExpertSetup >>> .tabs
  .tab-pane
    width calc(100% / 4 - 3px)
    box-sizing: border-box
    height .3rem
.ExpertSetup
  margin 0 6px
  padding 20px 0 10px 0
  .a
    .ExpertInformation
      margin 0
</style>
