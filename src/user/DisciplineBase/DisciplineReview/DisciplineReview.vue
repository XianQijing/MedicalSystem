// 初评评审
<template>
  <div class="DisciplineReview">
    <tabs v-model="clickTab">
      <tab title="评审通知列表" name="0">
        <NoticeList/>
      </tab>
      <tab title="初评状态查询" name="1">
        <statuesSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import NoticeList from './components/NoticeList'
import statuesSearch from './components/statuesSearch'
export default {
  name: 'DisciplineReview',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    NoticeList,
    statuesSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.DisciplineReview >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.DisciplineReview
  margin 0 6px
  padding 10px 0 10px 0
</style>
