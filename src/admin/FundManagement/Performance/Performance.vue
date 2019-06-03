// 经费管理
<template>
  <div class="Performance">
    <tabs v-model="clickTab">
      <tab title="经费入账" name="0">
        <RecordedInAccount/>
      </tab>
      <tab title="经费报销" name="1">
        <ExpensesReimbursement/>
      </tab>
      <tab title="审核状态查询" name="2">
        <SearchType/>
      </tab>
      <tab title="经费审核" name="3">
        <FundingAudit/>
      </tab>
      <tab title="使用明细" name="4">
        <Detail/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import RecordedInAccount from './components/RecordedInAccount'
import ExpensesReimbursement from './components/ExpensesReimbursement'
import SearchType from './components/searchType'
import FundingAudit from './components/FundingAudit'
import Detail from './components/Detail'
export default {
  name: 'Performance',
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
    ExpensesReimbursement,
    SearchType,
    Detail
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Performance >>> .tabs
  .tab-pane
    width calc(100% / 2 - .04rem)
    font-size .12rem
    &:nth-of-type(n+3)
      width calc(100% / 3 - .16rem / 3)
      margin-top .04rem
.Performance
  margin 0 .06rem
  padding .10rem 0 .10rem 0
</style>
