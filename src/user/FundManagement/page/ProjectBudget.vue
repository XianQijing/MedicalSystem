// 项目预算
<template>
  <div class="ProjectBudget">
    <tabs v-model="clickTab">
      <tab title="项目预算" name="0">
        <Budget/>
      </tab>
      <tab title="预算变更申请" name="1">
        <BudgetChange/>
      </tab>
      <tab title="状态查询" name="2">
        <ProjectBudgetStatues/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import Budget from '../components/Budget'
import BudgetChange from '../components/BudgetChange'
import ProjectBudgetStatues from '../components/ProjectBudgetStatues'
export default {
  name: 'ProjectBudget',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    Budget,
    BudgetChange,
    ProjectBudgetStatues
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectBudget >>> .tabs
  .tab-pane
    width calc((100% - .12rem) / 3)
    font-size 12px
.ProjectBudget
  margin 0 6px
  padding 10px 0 10px 0
</style>
