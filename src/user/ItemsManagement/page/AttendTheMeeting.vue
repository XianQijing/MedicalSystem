// 事项管理
<template>
  <div class="AttendTheMeeting">
    <tabs v-model="clickTab">
      <tab title="学术会议申请" name="0">
        <MeetingList/>
      </tab>
      <tab title="会议查询" name="1">
        <Expense/>
      </tab>
      <tab title="差旅费申请" name="2">
        <TravelExpenses/> // 不全
      </tab>
      <tab title="差旅费查询" name="3">
        <AcademicConference/> // 详情不全
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
import TravelExpenses from '../components/TravelExpenses'
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
    Expense,
    TravelExpenses
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AttendTheMeeting >>> .tabs
  .tab-pane
    width 23.5%
    // font-size 12px
.AttendTheMeeting
  margin 0 6px
  padding 20px 0 10px 0
</style>
