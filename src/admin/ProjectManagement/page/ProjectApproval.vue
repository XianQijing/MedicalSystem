// 立项管理
<template>
  <div class="ProjectApproval">
    <tabs v-model="clickTab">
      <tab title="批准项目" name="0">
        <ApprovalProject/>
      </tab>
      <tab title="储备项目" name="1">
        <ReserveItem/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApprovalProject from '../components/ApprovalProject'
import ReserveItem from '../components/ReserveItem'
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
    ApprovalProject,
    ReserveItem
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectApproval >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ProjectApproval
  margin 0 6px
  padding 20px 0 10px 0
</style>
