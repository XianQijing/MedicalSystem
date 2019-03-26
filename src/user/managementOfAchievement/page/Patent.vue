// 发明专利
<template>
  <div class="Patent">
    <tabs v-model="clickTab">
      <tab title="申请入口" name="0">
        <ApplicationEntry/>
      </tab>
      <tab title="申请状态查询" name="1">
        <ApplicationType/>
      </tab>
      <tab title="登记入口" name="2">
        <RegistrationEntry/>
      </tab>
      <tab title="登记状态查询" name="3">
        <!-- <ConversionSearch/> -->
      </tab>
      <tab title="专利经费申请" name="4">
        <PatentFunds/>
      </tab>
      <tab title="专利状态查询及打印" name="5">
        <Printing/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplicationEntry from '../components/ApplicationEntry'
import ApplicationType from '../components/ApplicationType'
import RegistrationEntry from '../components/RegistrationEntry'
import PatentFunds from '../components/PatentFunds'
import Printing from '../components/Printing'
// // import ConversionSearch from '../components/ConversionSearch'
export default {
  name: 'Achievement1',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ApplicationEntry,
    ApplicationType,
    RegistrationEntry,
    PatentFunds,
    Printing
    // ConversionSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Patent >>> .tabs
  .tab-pane
    width 1.16rem
    font-size 12px
    text-nowrap()
    &:nth-of-type(n+4)
      margin-top 5px
.Patent
  margin 0 6px
  padding 20px 0 10px 0
</style>
