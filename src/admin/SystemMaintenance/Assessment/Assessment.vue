// 考核设置
<template>
  <div class="Assessment">
    <tabs v-model="clickTab">
      <tab title="时间标准设置" name="0">
        <TimeSettings/>
      </tab>
      <tab title="本年考核设置" name="1">
        <YearSetting/>
      </tab>
      <tab title="上年考核设置" name="2">
        <YearSetting/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import TimeSettings from './TimeSettings'
import YearSetting from './YearSetting'
// import LevelFour from './LevelFour'
export default {
  name: 'Assessment',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    TimeSettings,
    YearSetting
    // LevelFour
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Assessment >>> .tabs
  .tab-pane
    width calc(100% / 3 - 8px / 3)
    box-sizing: border-box
    height .3rem
.Assessment
  margin 0 6px
  padding 20px 0 10px 0
</style>
