// 结题鉴定
<template>
  <div class="Concluding">
    <tabs v-model="clickTab">
      <tab title="通知列表" name="0">
        <ConcludingList/> <!-- 没有详情 -->
      </tab>
      <tab title="鉴定申请" name="1">
        <ConcludingApplication/>
      </tab>
      <tab title="状态查询" name="2">
        <ConcludingSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ConcludingList from '../components/ConcludingList'
import ConcludingApplication from '../components/ConcludingApplication'
import ConcludingSearch from '../components/ConcludingSearch'
export default {
  name: 'Concluding',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ConcludingList,
    ConcludingApplication,
    ConcludingSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Concluding >>> .tabs
  .tab-pane
    width 32%
    // font-size 12px
.Concluding
  margin 0 6px
  padding 20px 0 10px 0
</style>
