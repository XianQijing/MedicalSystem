// 课题指南
<template>
  <div class="ProjectSettings">
    <tabs v-model="clickTab">
      <tab title="课题计划指南" name="0">
        <GuideRelease/>
      </tab>
      <tab title="计划指南列表" name="1">
        <PlanGuide/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import GuideRelease from '../components/GuideRelease'
import PlanGuide from '../components/PlanGuide'
export default {
  name: 'ProjectSettings',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    GuideRelease,
    PlanGuide
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectSettings >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ProjectSettings
  margin 0 6px
  padding 10px 0 10px 0
</style>
