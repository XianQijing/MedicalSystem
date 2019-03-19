<template>
  <div class="credit">
    <tabs v-model="clickTab">
      <tab title="I类学分登记" name="0">
        <i-register/>
      </tab>
      <tab title="II类学分登记" name="1">
        <i-i-register/>
      </tab>
      <tab title="I类学分列表" name="2">
        <I/>
      </tab>
      <tab title="II类学分列表" name="3">
        <i-i/>
      </tab>
      <tab title="继教学分" name="4">
        <continue-credit></continue-credit>
      </tab>
    </tabs>
    <!-- {{clickTab}} -->
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import I from './components/I'
import II from './components/II'
import IRegister from './components/IRegister'
import IIRegister from './components/IIRegister'
import ContinueCredit from './components/continueCredit'
export default {
  name: 'Credit',
  data () {
    return {
      clickTab: 'dfr'
    }
  },
  components: {
    Tab,
    Tabs,
    I,
    II,
    IRegister,
    IIRegister,
    ContinueCredit
  }
}
</script>

<style lang="stylus" scoped>
.credit >>> .tab-pane
  width 31.5%
  &:nth-of-type(1), &:nth-of-type(2)
    width 48.5%
    margin-bottom 5px
.credit
  padding-top 20px
  margin 0 6px
</style>
