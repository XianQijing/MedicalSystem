// 课题申报
<template>
  <div class="ProjectDeclaration">
    <tabs v-model="clickTab">
      <tab title="人才基础数据" name="0">
        <BasicDataOfTalents/>
      </tab>
      <tab title="人才学术水平" name="1">
        <AcademicLevelOfTalents/>
      </tab>
      <tab title="人才科研业绩" name="2">
        <TalentsAchievements/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import BasicDataOfTalents from '../components/BasicDataOfTalents'
import AcademicLevelOfTalents from '../components/AcademicLevelOfTalents'
import TalentsAchievements from '../components/TalentsAchievements'
export default {
  name: 'ProjectDeclaration',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    BasicDataOfTalents,
    AcademicLevelOfTalents,
    TalentsAchievements
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectDeclaration >>> .tabs
  .tab-pane
    width 32%
    // font-size 12px
.ProjectDeclaration
  margin 0 6px
  padding 10px 0 10px 0
</style>
