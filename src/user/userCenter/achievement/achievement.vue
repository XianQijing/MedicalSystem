// 用户业绩
<template>
  <div class="achievement">
    <tabs v-model="clickTab">
      <tab title="我的申报" name="0">
        <MyDeclare></MyDeclare>
      </tab>
      <tab title="我的项目" name="1">
        <MyProject/>
      </tab>
      <tab title="我的经费" name="2">
        <MyFunds/>
      </tab>
      <tab title="我的论文" name="3">
        <MyPaper/>
      </tab>
      <tab title="我的会议" name="4">
        <Meeting/>
      </tab>
      <tab title="我的专利" name="5">
        <MyPatent/>
      </tab>
      <tab title="我的成果" name="6">
        <MyAchievement/>
      </tab>
      <tab title="我的奖励" name="7">
        <MyReward/>
      </tab>
      <tab title="我的著作" name="8">
        <MyWrite/>
      </tab>
      <tab title="我的任职" name="9">
        <MyServing/>
      </tab>
      <tab title="我的活动" name="10">
        <MyActivity/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import MyDeclare from '@/page/userCenter/achievement/myDeclare'
import MyProject from '@/page/userCenter/achievement/myProject'
import MyFunds from '@/page/userCenter/achievement/myFunds'
import MyPaper from '@/page/userCenter/achievement/myPaper'
import Meeting from '@/page/userCenter/achievement/myMeeting'
import MyPatent from '@/page/userCenter/achievement/myPatent'
import MyAchievement from '@/page/userCenter/achievement/myAchievement'
import MyReward from '@/page/userCenter/achievement/myReward'
import MyWrite from '@/page/userCenter/achievement/myWrite'
import MyServing from '@/page/userCenter/achievement/myServing'
import MyActivity from '@/page/userCenter/achievement/myActivity'
export default {
  name: 'Achievement',
  data () {
    return {
      clickTab: '0'
    }
  },
  components: {
    Tab,
    Tabs,
    MyDeclare,
    MyProject,
    MyFunds,
    MyPaper,
    Meeting,
    MyPatent,
    MyAchievement,
    MyReward,
    MyWrite,
    MyServing,
    MyActivity
  }
}
</script>

<style lang="stylus" scoped>
.achievement >>> .tab-pane
  width 23.5%
  margin-bottom 5px
  &:last-child
    width 49%
.achievement
  padding-top 20px
  margin 0 6px
</style>
