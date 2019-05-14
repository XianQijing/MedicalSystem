// 用户业绩
<template>
  <div class="PerformanceDetail">
    <tabs v-model="clickTab">
      <tab title="科研课题" name="0">
        <ScientificResearchTopic title="科研课题"/>
      </tab>
      <tab title="学科建设" name="1">
        <ScientificResearchTopic title="学科建设"/>
      </tab>
      <tab title="人才培养" name="2">
        <ScientificResearchTopic title="人才培养"/>
      </tab>
      <tab title="科研奖励" name="3">
        <ScientificResearchTopic title="科研奖励"/>
      </tab>
      <tab title="期刊论文" name="4">
        <ScientificResearchTopic title="期刊论文"/>
      </tab>
      <tab title="专利申请" name="5">
        <ScientificResearchTopic title="专利申请"/>
      </tab>
      <tab title="出版专著" name="6">
        <ScientificResearchTopic title="出版专著"/>
      </tab>
      <tab title="学术任职" name="7">
        <ScientificResearchTopic title="学术任职"/>
      </tab>
      <tab title="成果申请" name="8">
        <ScientificResearchTopic title="成果申请"/>
      </tab>
      <tab title="学术活动" name="9">
        <ScientificResearchTopic title="学术活动"/>
      </tab>
      <tab title="绩效统计" name="10">
        <PerformanceStatistics/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ScientificResearchTopic from '../components/ScientificResearchTopic'
import PerformanceStatistics from '../components/PerformanceStatistics'

export default {
  name: 'PerformanceDetail',
  data () {
    return {
      clickTab: '0'
    }
  },
  components: {
    Tab,
    Tabs,
    ScientificResearchTopic,
    PerformanceStatistics
  }
}
</script>

<style lang="stylus" scoped>
.PerformanceDetail >>> .tab-pane
  width 23.5%
  margin-bottom 5px
  &:last-child
    width 49%
.PerformanceDetail
  padding-top 10px
  margin 0 6px
</style>
