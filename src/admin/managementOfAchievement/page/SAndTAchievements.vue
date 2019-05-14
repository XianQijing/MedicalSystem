// 科研成果
<template>
  <div class="SAndTAchievements">
    <tabs v-model="clickTab">
      <tab title="成果申报" name="0">
        <ProductionApplication/>
      </tab>
      <tab title="成果登记" name="1">
        <RegistrationOfAchievements/>
      </tab>
      <tab title="成果奖励" name="2">
        <AchievementAward/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProductionApplication from '../components/productionApplication'
import RegistrationOfAchievements from '../components/registrationOfAchievements'
import AchievementAward from '../components/achievementAward'
export default {
  name: 'SAndTAchievements',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProductionApplication,
    RegistrationOfAchievements,
    AchievementAward
  }
}
</script>

<style lang="stylus" scoped>
.SAndTAchievements >>> .tabs
  .tab-pane
    width 1.16rem
.SAndTAchievements
  margin 0 6px
  padding 10px 0 10px 0
</style>
