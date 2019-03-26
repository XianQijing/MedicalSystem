// 成果转化
<template>
  <div class="achievement">
    <tabs v-model="clickTab">
      <tab title="转化申报" name="0">
        <ConversionDeclaration/>
      </tab>
      <tab title="转化查询" name="1">
        <ConversionSearch/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ConversionDeclaration from '../components/ConversionDeclaration'
import ConversionSearch from '../components/conversionSearch'
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
    ConversionDeclaration,
    ConversionSearch
  }
}
</script>

<style lang="stylus" scoped>
.achievement >>> .tabs
  .tab-pane
    width 1.77rem
.achievement
  margin 0 6px
  padding 20px 0 10px 0
</style>
