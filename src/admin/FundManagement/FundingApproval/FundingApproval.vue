// 经费预算
<template>
  <div class="FundingApproval">
    <tabs v-model="clickTab">
      <tab title="经费使用审核" name="0">
        <hadUse/>
      </tab>
      <tab title="已审核列表" name="1">
        <FundingApproval1/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import FundingApproval1 from './components/FundingApproval'
import hadUse from './components/hadUse'
export default {
  name: 'FundingApproval',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    hadUse,
    FundingApproval1
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundingApproval >>> .tabs
  .tab-pane
    width calc(100% / 2 - .03rem)
    font-size .12rem
.FundingApproval
  margin 0 .06rem
  padding .10rem 0 .10rem 0
</style>
