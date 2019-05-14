// 主办会议
<template>
  <div class="AttendTheMeeting">
    <tabs v-model="clickTab">
      <tab title="项目列表" name="0">
        <!-- <MeetingList/> -->
      </tab>
      <tab title="执行列表" name="1">
        <ExecutionList/>
      </tab>
      <tab title="项目查询" name="2">
        <ProjectSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
// // import MeetingList from '../components/MeetingList'
import ExecutionList from '../components/ExecutionList'
import ProjectSearch from '../components/ProjectSearch'
export default {
  name: 'AttendTheMeeting',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    // MeetingList,
    ProjectSearch,
    ExecutionList
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AttendTheMeeting >>> .tabs
  .tab-pane
    width 32.1%
    // font-size 12px
.AttendTheMeeting
  margin 0 6px
  padding 10px 0 10px 0
</style>
