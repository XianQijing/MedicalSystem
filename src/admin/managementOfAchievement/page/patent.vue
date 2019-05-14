<template>
  <div class="patent">
    <tabs v-model="clickTab">
      <tab title="专利申请" name="0">
        <PatentApplication/>
      </tab>
      <tab title="专利登记" name="1">
        <PatentRegisteation/>
      </tab>
      <tab title="专利经费" name="2">
        <PatentFunds/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import PatentApplication from '../components/patentApplication'
import PatentRegisteation from '../components/patentRegisteation'
import PatentFunds from '../components/patentFunds'
export default {
  name: 'Patent',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    PatentApplication,
    PatentRegisteation,
    PatentFunds
  }
}
</script>

<style lang="stylus" scoped>
.patent >>> .tabs
  .tab-pane
    width 1.16rem
.patent
  margin 0 6px
  padding 10px 0 10px 0
</style>
