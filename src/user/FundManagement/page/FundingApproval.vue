// 经费审批
<template>
  <div class="FundingApproval">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <ApplicationForMatters/>
      </tab>
      <tab title="状态查询" name="1">
        <StateSearchAndPritin/>
      </tab>
      <tab title="打印申请列表" name="2">
        <PritinApply/>
      </tab>
      <tab title="已打印列表" name="3">
        <StateSearchAndPritin/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplicationForMatters from '../components/ApplicationForMatters'
import PritinApply from '../components/PritinApply'
import StateSearchAndPritin from '../components/StateSearchAndPritin'
export default {
  name: 'FundingApproval',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ApplicationForMatters,
    StateSearchAndPritin,
    PritinApply
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundingApproval >>> .tabs
  .tab-pane
    width calc((100% - .06rem) / 2)
    font-size .12rem
    &:nth-of-type(n+3)
      margin-top .04rem
.FundingApproval
  margin 0 .06rem
  padding .1rem 0 .1rem 0
</style>
