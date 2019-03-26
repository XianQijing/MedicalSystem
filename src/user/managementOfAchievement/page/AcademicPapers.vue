// 学术论文
<template>
  <div class="AcademicPapers">
    <tabs v-model="clickTab">
      <tab title="介绍信申请" name="0">
        <IntroductoryLetter/>
      </tab>
      <tab title="版面费申请" name="1">
        <CostApplication/>
      </tab>
      <tab title="介绍信查询及打印" name="2">
        <IntroductoryLetterSearch/>
      </tab>
      <tab title="版面费查询及打印" name="3">
        <CostApplicationSearch/>
      </tab>
      <tab title="论文列表" name="4">
        <PaperList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import IntroductoryLetter from '../components/IntroductoryLetter'
import CostApplication from '../components/CostApplication'
import IntroductoryLetterSearch from '../components/IntroductoryLetterSearch'
import CostApplicationSearch from '../components/CostApplicationSearch'
import PaperList from '../components/PaperList'
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
    IntroductoryLetter,
    CostApplication,
    IntroductoryLetterSearch,
    PaperList,
    CostApplicationSearch
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AcademicPapers >>> .tabs
  .tab-pane
    width 1.77rem
    font-size 12px
    text-nowrap()
    &:nth-of-type(n+3)
      margin-top 5px
      width 1.16rem
.AcademicPapers
  margin 0 6px
  padding 20px 0 10px 0
</style>
