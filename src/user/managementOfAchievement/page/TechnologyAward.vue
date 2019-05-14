// 科技奖励
<template>
  <div class="TechnologyAward">
    <tabs v-model="clickTab">
      <tab title="成果申报" name="0">
        <ApplyForAchievements/>
      </tab>
      <tab title="成果申报状态查询" name="1">
        <ApplyForAchievementsType/>
      </tab>
      <tab title="成果登记" name="2">
        <RegistrationOfAchievements/>
      </tab>
      <tab title="成果登记状态查询" name="3">
        <RegistrationStatuesSearch/>
      </tab>
      <tab title="奖励登记" name="4">
        <AwardRegistration/>
      </tab>
      <tab title="奖励登记状态查询" name="5">
        <AwardRegistrationStatues/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplyForAchievements from '../components/ApplyForAchievements'
import ApplyForAchievementsType from '../components/ApplyForAchievementsType'
import RegistrationEntry from '../components/RegistrationEntry'
import RegistrationOfAchievements from '../components/RegistrationOfAchievements'
import AwardRegistration from '../components/AwardRegistration'
import RegistrationStatuesSearch from '../components/RegistrationStatuesSearch'
import AwardRegistrationStatues from '../components/AwardRegistrationStatues'
export default {
  name: 'TechnologyAward',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ApplyForAchievements,
    ApplyForAchievementsType,
    RegistrationEntry,
    RegistrationOfAchievements,
    AwardRegistration,
    RegistrationStatuesSearch,
    AwardRegistrationStatues
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.TechnologyAward >>> .tabs
  .tab-pane
    width 1.16rem
    font-size 12px
    text-nowrap()
    &:nth-of-type(n+4)
      margin-top 5px
.TechnologyAward
  margin 0 6px
  padding 10px 0 10px 0
</style>
