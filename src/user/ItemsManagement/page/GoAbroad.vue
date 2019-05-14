// 出国交流
<template>
  <div class="GoAbroad">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <ApplicationForMatters/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <GoAbroadPriting/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ApplicationForMatters from '../components/ApplicationForMatters'
import GoAbroadPriting from '../components/GoAbroadPriting'
export default {
  name: 'GoAbroad',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ApplicationForMatters,
    GoAbroadPriting
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.GoAbroad >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.GoAbroad
  margin 0 6px
  padding 10px 0 10px 0
</style>
