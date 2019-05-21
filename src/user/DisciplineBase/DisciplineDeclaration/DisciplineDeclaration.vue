// 学科申报
<template>
  <div class="DisciplineDeclaration">
    <tabs v-model="clickTab">
      <tab title="申报端口" name="0">
        <DisciplineDeclarationPort/>
      </tab>
      <tab title="申报列表" name="1">
        <DisciplineDeclarationList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import DisciplineDeclarationPort from './components/DisciplineDeclarationPort'
import DisciplineDeclarationList from './components/DisciplineDeclarationList'
export default {
  name: 'DisciplineDeclaration',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    DisciplineDeclarationPort,
    DisciplineDeclarationList
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.DisciplineDeclaration >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.DisciplineDeclaration
  margin 0 6px
  padding 10px 0 10px 0
</style>
