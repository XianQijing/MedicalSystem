// 学术论文
<template>
  <div class="AcademicPapers">
    <tabs v-model="clickTab">
      <tab title="介绍信审核" name="0">
        <IntroductoryLetter/>
      </tab>
      <tab title="经费报销审核" name="1">
        <ExpensesReimbursement/>
      </tab>
      <tab title="学术论文列表" name="2">
        <AcademicPaperList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import IntroductoryLetter from '../components/IntroductoryLetter'
import ExpensesReimbursement from '../components/ExpensesReimbursement'
import AcademicPaperList from '../components/AcademicPaperList'
export default {
  name: 'AcademicPapers',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    IntroductoryLetter,
    ExpensesReimbursement,
    AcademicPaperList
  }
}
</script>

<style lang="stylus" scoped>
.AcademicPapers >>> .tabs
  .tab-pane
    width 1.16rem
.AcademicPapers
  margin 0 6px
  padding 20px 0 10px 0
</style>
