// 经费审批
<template>
  <div class="FundingApproval">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <ApplicationForMatters/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <StateSearchAndPritin/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplicationForMatters from '../components/ApplicationForMatters'
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
    StateSearchAndPritin
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundingApproval >>> .tabs
  .tab-pane
    width 1.77rem
    font-size 12px
.FundingApproval
  margin 0 6px
  padding 10px 0 10px 0
</style>
