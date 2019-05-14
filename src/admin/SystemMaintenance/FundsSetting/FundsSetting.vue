// 预算设置
<template>
  <div class="FundsSetting">
    <tabs v-model="clickTab">
      <tab title="一级科目设置" name="0">
        <LevelOne/>
      </tab>
      <tab title="二、三级设置" name="1">
        <LevelTwoThree/>
      </tab>
      <tab title="四级科目设置" name="2">
          <LevelFour/>
      </tab>
      <tab title="编纂预算规范" name="3">
        <FundsStandard/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import LevelOne from './LevelOne'
import LevelTwoThree from './LevelTwoThree'
import LevelFour from './LevelFour'
import FundsStandard from './FundsStandard'
export default {
  name: 'FundsSetting',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    LevelOne,
    LevelTwoThree,
    LevelFour,
    FundsStandard
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundsSetting >>> .tabs
  .tab-pane
    width calc(100% / 4 - 3px)
    box-sizing: border-box
    height .3rem
.FundsSetting
  margin 0 6px
  padding 10px 0 10px 0
</style>
