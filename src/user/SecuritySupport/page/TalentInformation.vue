// 人才信息
<template>
  <div class="TalentInformation">
    <tabs v-model="clickTab">
      <tab title="项目基础信息" name="0">
        <TalentBasicInformation/>
      </tab>
      <tab title="审核状态查询" name="1">
        <TalentAuditStatusQuery/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import TalentBasicInformation from '../components/TalentBasicInformation'
import TalentAuditStatusQuery from '../components/TalentAuditStatusQuery'
export default {
  name: 'TalentInformation',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    TalentBasicInformation,
    TalentAuditStatusQuery
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.TalentInformation >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.TalentInformation
  margin 0 6px
  padding 20px 0 10px 0
</style>
