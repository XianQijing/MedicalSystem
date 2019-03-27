// 事项管理
<template>
  <div class="AttendTheMeeting">
    <tabs v-model="clickTab">
      <tab title="会议列表" name="0">
        <MeetingList/>
      </tab>
      <tab title="经费报销" name="1">
        <Expense/>
      </tab>
      <tab title="学术会议" name="2">
        <AcademicConference/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import MeetingList from '../components/MeetingList'
import Expense from '../components/Expense'
import AcademicConference from '../components/AcademicConference'
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
    MeetingList,
    AcademicConference,
    Expense
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
  padding 20px 0 10px 0
</style>
