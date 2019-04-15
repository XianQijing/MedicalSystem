<template>
  <div class="ProjectManagement">
    <tabs v-model="clickTab">
      <tab title="项目审批" name="0">
        <ProjectApproval/>
      </tab>
      <tab title="结题鉴定" name="1">
        <IdentificationOfKnot/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectApproval from './ProjectApproval'
import IdentificationOfKnot from './IdentificationOfKnot'
export default {
  name: 'ProjectManagement',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProjectApproval,
    IdentificationOfKnot
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectManagement >>> .tabs
  .tab-pane
    width calc(100% / 2 - 4px)
    // font-size 12px
.ProjectManagement
  margin 0 6px
  padding 20px 0 10px 0
</style>
