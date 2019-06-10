// 项目经费
<template>
  <div class="ProjectFunds">
    <tabs v-model="clickTab">
      <tab title="项目经费" name="0">
        <ProjectFunds1/>
      </tab>
      <tab title="经费查询" name="1">
        <FundSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectFunds1 from './components/ProjectFunds1'
import FundSearch from './components/FundSearch'
export default {
  name: 'ProjectFunds',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    FundSearch,
    ProjectFunds1
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectFunds >>> .tabs
  .tab-pane
    width calc(100% / 2 - .03rem)
    font-size .12rem
.ProjectFunds
  margin 0 .06rem
  padding .10rem 0 .10rem 0
</style>
