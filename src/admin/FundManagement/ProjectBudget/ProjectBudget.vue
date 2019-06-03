// 经费预算
<template>
  <div class="ProjectBudget">
    <tabs v-model="clickTab">
      <tab title="预算变更审核" name="0">
        <ProjectBudgeta/>
      </tab>
      <tab title="已审核列表" name="1">
        <hadExamine/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectBudgeta from './components/ProjectBudgeta'
import hadExamine from './components/hadExamine'
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
    hadExamine,
    ProjectBudgeta
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectBudget >>> .tabs
  .tab-pane
    width calc(100% / 2 - .03rem)
    font-size .12rem
.ProjectBudget
  margin 0 .06rem
  padding .10rem 0 .10rem 0
</style>
