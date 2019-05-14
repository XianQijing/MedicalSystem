<template>
  <div class="ScientificResearchTopic">
    <tabs v-model="clickTab">
      <tab title="等待审批课题" name="0">
        <SubjectsAwaitingApproval/>
      </tab>
      <tab title="申报课题列表" name="1">
        <ListOfDeclaredTopics/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import SubjectsAwaitingApproval from './SubjectsAwaitingApproval'
import ListOfDeclaredTopics from './ListOfDeclaredTopics'
export default {
  name: 'ScientificResearchTopic',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    SubjectsAwaitingApproval,
    ListOfDeclaredTopics
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchTopic >>> .tabs
  .tab-pane
    width calc(100% / 2 - 4px)
.ScientificResearchTopic
  margin 0 6px
  padding 10px 0 10px 0
</style>
