// 实验申请
<template>
  <div class="ExperimentalApplication">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <Experimental/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <ExperimentalPriting/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import Experimental from '../components/Experimental'
import ExperimentalPriting from '../components/ExperimentalPriting'
export default {
  name: 'ExperimentalApplication',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    Experimental,
    ExperimentalPriting
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ExperimentalApplication >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.ExperimentalApplication
  margin 0 6px
  padding 20px 0 10px 0
</style>
