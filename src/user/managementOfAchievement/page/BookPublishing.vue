// 著作出版
<template>
  <div class="TechnologyAward">
    <tabs v-model="clickTab">
      <tab title="出版申请" name="0">
        <PublicationApplication/>
      </tab>
      <tab title="出版状态查询" name="1">
        <PublicationType/>
      </tab>
      <tab title="著作登记" name="2">
        <RegistrationOfAchievements/>
      </tab>
      <tab title="登记状态查询" name="3">
        <RegistrationStatus/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import PublicationApplication from '../components/PublicationApplication'
import PublicationType from '../components/PublicationType'
import RegistrationOfAchievements from '../components/RegistrationOfAchievements'
import RegistrationStatus from '../components/RegistrationStatus'
export default {
  name: 'Achievement1',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    PublicationApplication,
    PublicationType,
    RegistrationOfAchievements,
    RegistrationStatus
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.TechnologyAward >>> .tabs
  .tab-pane
    width .87rem
    font-size 12px
.TechnologyAward
  margin 0 6px
  padding 20px 0 10px 0
</style>
