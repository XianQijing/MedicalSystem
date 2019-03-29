// 试剂耗材
<template>
  <div class="ReagentConsumables">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <ReagentApplication/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <ReagentStatues/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ReagentApplication from '../components/ReagentApplication'
import ReagentStatues from '../components/ReagentStatues'
export default {
  name: 'ReagentConsumables',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ReagentApplication,
    ReagentStatues
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ReagentConsumables >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ReagentConsumables
  margin 0 6px
  padding 20px 0 10px 0
</style>
