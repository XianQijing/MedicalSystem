// 项目合同
<template>
  <div class="ProjectContract">
    <tabs v-model="clickTab">
      <tab title="提交合同" name="0">
        <ContractSubmission/>
      </tab>
      <tab title="变更合同" name="1">
        <ContractChange/>
      </tab>
      <tab title="状态查询" name="2">
        <ContractSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ContractSubmission from '../components/ContractSubmission'
import ContractChange from '../components/ContractChange'
import ContractSearch from '../components/ContractSearch'
export default {
  name: 'ProjectContract',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ContractSubmission,
    ContractChange,
    ContractSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectContract >>> .tabs
  .tab-pane
    width 32%
    // font-size 12px
.ProjectContract
  margin 0 6px
  padding 20px 0 10px 0
</style>
