<template>
  <div class="IdentificationOfKnot">
    <tabs v-model="clickTab">
      <tab title="等待审批课题" name="0">
        <SubjectsAwaitingApproval1/>
      </tab>
      <tab title="申报课题列表" name="1">
        <ListOfDeclaredTopics1/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import SubjectsAwaitingApproval1 from './SubjectsAwaitingApproval1'
import ListOfDeclaredTopics1 from './ListOfDeclaredTopics1'
export default {
  name: 'IdentificationOfKnot',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    SubjectsAwaitingApproval1,
    ListOfDeclaredTopics1
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.IdentificationOfKnot >>> .tabs
  .tab-pane
    width calc(100% / 2 - 4px)
    // font-size 12px
.IdentificationOfKnot
  margin-top 4px
</style>
