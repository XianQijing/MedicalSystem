// 项目变更
<template>
  <div class="ProjectChange">
    <tabs v-model="clickTab">
      <tab title="变更申请" name="0">
        <ChangeApplication/>
      </tab>
      <tab title="项目查询" name="1">
        <ChangeApplicationSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ChangeApplication from '../components/ChangeApplication'
import ChangeApplicationSearch from '../components/ChangeApplicationSearch'
export default {
  name: 'ProjectChange',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ChangeApplication,
    ChangeApplicationSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectChange >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ProjectChange
  margin 0 6px
  padding 10px 0 10px 0
</style>
