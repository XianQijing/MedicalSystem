// 学科信息
<template>
  <div class="SubjectInformation">
    <tabs v-model="clickTab">
      <tab title="项目基础信息" name="0">
        <ProjectBasicInformation/>
      </tab>
      <tab title="审核状态查询" name="1">
        <AuditStatusQuery/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectBasicInformation from '../components/ProjectBasicInformation'
import AuditStatusQuery from '../components/AuditStatusQuery'
export default {
  name: 'SubjectInformation',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProjectBasicInformation,
    AuditStatusQuery
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectInformation >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.SubjectInformation
  margin 0 6px
  padding 20px 0 10px 0
</style>
