<template>
  <div class="credit">
    <tabs v-model="clickTab">
      <tab title="I类学分" name="0">
        <I/>
      </tab>
      <tab title="II类学分" name="1">
        <i-i/>
      </tab>
      <tab title="继教学分" name="2">
        <continueCredit/>
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
import ContinueCredit from './components/continue'
export default {
  name: 'Credit',
  data () {
    return {
      clickTab: '0'
    }
  },
  components: {
    Tab,
    Tabs,
    I,
    II,
    ContinueCredit
  }
}
</script>

<style lang="stylus" scoped>
.credit >>> .tab-pane
  width 31.5%
.credit
  padding-top 20px
  margin 0 6px
</style>
