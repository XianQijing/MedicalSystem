// 报销申请
<template>
  <div class="ApplicationForReimbursement">
    <tabs v-model="clickTab">
      <tab title="经费报销申请" name="0">
        <ApplyReimbursement/>
      </tab>
      <tab title="状态查询" name="1">
        <StateQuery/>
      </tab>
      <tab title="打印报销清单" name="2">
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
    width calc(100%/3 - .14rem / 3)
    font-size .12rem
.ApplicationForReimbursement
  margin 0 .06rem
  padding .1rem 0 .1rem 0
</style>
