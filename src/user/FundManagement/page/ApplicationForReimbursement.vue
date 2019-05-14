// 报销申请
<template>
  <div class="ApplicationForReimbursement">
    <tabs v-model="clickTab">
      <tab title="经费报销申请" name="0">
        <ApplyReimbursement/>
      </tab>
      <tab title="审核状态查询" name="1">
        <StateQuery/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplyReimbursement from '../components/ApplyReimbursement'
import StateQuery from '../components/StateQuery'
export default {
  name: 'ApplicationForReimbursement',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ApplyReimbursement,
    StateQuery
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ApplicationForReimbursement >>> .tabs
  .tab-pane
    width 1.77rem
    font-size 12px
.ApplicationForReimbursement
  margin 0 6px
  padding 10px 0 10px 0
</style>
