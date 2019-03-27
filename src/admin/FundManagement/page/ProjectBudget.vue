// 项目预算
<template>
  <div class="ProjectBudget">
    <tabs v-model="clickTab">
      <tab title="预算变更申请" name="0">
        <BudgetChange/>
      </tab>
      <tab title="项目预算状态" name="1">
        <ProjectBudgetStatues/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
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
    BudgetChange,
    ProjectBudgetStatues
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectBudget >>> .tabs
  .tab-pane
    width 1.77rem
    font-size 12px
.ProjectBudget
  margin 0 6px
  padding 20px 0 10px 0
</style>
