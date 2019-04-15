<template>
  <div class="ProjectApproval">
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
  name: 'ProjectApproval',
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
.ProjectApproval >>> .tabs
  .tab-pane
    width calc(100% / 2 - 4px)
    // font-size 12px
.ProjectApproval
  margin-top 4px
</style>
