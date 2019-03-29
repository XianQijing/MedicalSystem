// 中期检查
<template>
  <div class="IntermediateInspection">
    <tabs v-model="clickTab">
      <tab title="通知列表" name="0">
        <NoticeList/> <!-- 没有详情 -->
      </tab>
      <tab title="检查申请" name="1">
        <InspectionApplication/>
      </tab>
      <tab title="状态查询" name="2">
        <InspectionSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import NoticeList from '../components/NoticeList'
import InspectionApplication from '../components/InspectionApplication'
import InspectionSearch from '../components/InspectionSearch'
export default {
  name: 'IntermediateInspection',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    NoticeList,
    InspectionApplication,
    InspectionSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.IntermediateInspection >>> .tabs
  .tab-pane
    width 32%
    // font-size 12px
.IntermediateInspection
  margin 0 6px
  padding 20px 0 10px 0
</style>
