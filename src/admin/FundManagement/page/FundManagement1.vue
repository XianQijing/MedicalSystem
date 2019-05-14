// 经费管理
<template>
  <div class="FundManagement1">
    <tabs v-model="clickTab">
      <tab title="经费入账" name="0">
        <RecordedInAccount/>
      </tab>
      <tab title="经费报销" name="1">
        <ExpensesReimbursement/>
      </tab>
      <tab title="经费审核" name="2">
        <FundingAudit/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import RecordedInAccount from '../components/RecordedInAccount'
import ExpensesReimbursement from '../components/ExpensesReimbursement'
import FundingAudit from '../components/FundingAudit'
export default {
  name: 'FundManagement1',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    RecordedInAccount,
    FundingAudit,
    ExpensesReimbursement
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundManagement1 >>> .tabs
  .tab-pane
    width 32.1%
    font-size 12px
.FundManagement1
  margin 0 6px
  padding 10px 0 10px 0
</style>
