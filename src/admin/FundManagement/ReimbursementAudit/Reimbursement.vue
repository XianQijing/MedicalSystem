<template>
  <div class="Reimbursement">
    <tabs v-model="clickTab">
      <tab title="经费申请审核" name="0">
        <Apply/>
      </tab>
      <tab title="已审核列表" name="1">
        <ReimbursementAudit/>
      </tab>
      <tab title="财务已审核列表" name="2">
        <Finance/>
      </tab>
      <tab title="科管已审核列表" name="3">
        <Discipline/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import Apply from './components/Apply'
import ReimbursementAudit from './components/ReimbursementAudit'
import Finance from './components/Finance'
import Discipline from './components/Discipline'
export default {
  name: 'Reimbursement',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ReimbursementAudit,
    Apply,
    Discipline,
    Finance
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Reimbursement >>> .tabs
  .tab-pane
    width calc(100% / 2 - .03rem)
    font-size .12rem
    &:nth-of-type(n+3)
      margin-top .04rem
.Reimbursement
  margin 0 .06rem
  padding .10rem 0 .10rem 0
</style>
