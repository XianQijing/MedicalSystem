// 科研合作
<template>
  <div class="ScientificResearchCooperation">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <CooperationApplication/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <CooperationPrinting/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import CooperationApplication from '../components/CooperationApplication'
import CooperationPrinting from '../components/CooperationPrinting'
export default {
  name: 'ScientificResearchCooperation',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    CooperationApplication,
    CooperationPrinting
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchCooperation >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ScientificResearchCooperation
  margin 0 6px
  padding 20px 0 10px 0
</style>
