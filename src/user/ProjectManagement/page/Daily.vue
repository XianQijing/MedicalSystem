// 日常考核
<template>
  <div class="Daily">
    <tabs v-model="clickTab">
      <tab title="考核申请" name="0">
        <AssessmentApplication/>
      </tab>
      <tab title="项目查询" name="1">
        <AssessmentSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import AssessmentApplication from '../components/AssessmentApplication'
import AssessmentSearch from '../components/AssessmentSearch'
export default {
  name: 'Daily',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    AssessmentApplication,
    AssessmentSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Daily >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.Daily
  margin 0 6px
  padding 10px 0 10px 0
</style>
