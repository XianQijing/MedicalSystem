// 学科计划指南
<template>
  <div class="DisciplineGuide">
    <tabs v-model="clickTab">
      <tab title="项目申报指南" name="0">
        <Disciplineplan/>
      </tab>
      <tab title="学科指南列表" name="1">
        <guideList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import Disciplineplan from './components/Disciplineplan'
import guideList from './components/guideList'
export default {
  name: 'DisciplineGuide',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    Disciplineplan,
    guideList
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.DisciplineGuide >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.DisciplineGuide
  margin 0 6px
  padding 10px 0 10px 0
</style>
