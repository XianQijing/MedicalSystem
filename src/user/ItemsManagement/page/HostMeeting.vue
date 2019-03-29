// 主办会议
<template>
  <div class="HostMeeting">
    <tabs v-model="clickTab">
      <tab title="项目申报" name="0">
        <ProjectList/>
      </tab>
      <tab title="申报状态" name="1">
        <ApplicationStatus/> //查看没有
      </tab>
      <tab title="项目执行" name="2">
        <DoProject/>
      </tab>
      <tab title="执行状态" name="3">
        <ExecutionList/>
      </tab>
      <tab title="项目查询" name="4">
        <ProjectSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectList from '../components/ProjectList'
import ApplicationStatus from '../components/ApplicationStatus'
import DoProject from '../components/DoProject'
import ExecutionList from '../components/ExecutionList'
import ProjectSearch from '../components/ProjectSearch'
export default {
  name: 'HostMeeting',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProjectList,
    ApplicationStatus,
    ProjectSearch,
    ExecutionList,
    DoProject
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.HostMeeting >>> .tabs
  .tab-pane
    width 18.5%
    // font-size 12px
.HostMeeting
  margin 0 6px
  padding 20px 0 10px 0
</style>
