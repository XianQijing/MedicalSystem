// 课题申报
<template>
  <div class="ProjectDeclaration">
    <tabs v-model="clickTab">
      <tab title="申报端口" name="0">
        <DeclarationPort/>
      </tab>
      <tab title="课题列表" name="1">
        <ListOfTopics/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import DeclarationPort from '../components/DeclarationPort'
import ListOfTopics from '../components/ListOfTopics'
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
    DeclarationPort,
    ListOfTopics
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectDeclaration >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ProjectDeclaration
  margin 0 6px
  padding 20px 0 10px 0
</style>
