// 课题初评
<template>
  <div class="ProjectDeclaration">
    <tabs v-model="clickTab">
      <tab title="通知列表" name="0">
        <TopicList/>
      </tab>
      <tab title="项目列表" name="1">
        <ProjectList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import TopicList from '../components/TopicList'
import ProjectList from '../components/ProjectList'
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
    TopicList,
    ProjectList
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
  padding 10px 0 10px 0
</style>
