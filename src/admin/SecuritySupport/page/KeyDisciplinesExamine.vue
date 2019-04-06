// 信息审核
<template>
  <div class="KeyDisciplinesExamine">
    <tabs v-model="clickTab">
      <tab title="学科基本数据" name="0">
        <SubjectBasicData/>
      </tab>
      <tab title="学科基础条件" name="1">
        <BasicConditionsOfDiscipline/>
      </tab>
      <tab title="学科技术队伍" name="2">
        <SubjectTechnicalTeam/>
      </tab>
      <tab title="学科服务能力" name="3">
        <SubjectServiceAbility/>
      </tab>
      <tab title="学科医疗质量" name="4">
        <SubjectMedicalQuality/>
      </tab>
      <tab title="学科科研教学" name="5">
        <ScientificTeaching/> // 不全
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import SubjectBasicData from '../components/SubjectBasicData'
import BasicConditionsOfDiscipline from '../components/BasicConditionsOfDiscipline'
import SubjectTechnicalTeam from '../components/SubjectTechnicalTeam'
import SubjectServiceAbility from '../components/SubjectServiceAbility'
import SubjectMedicalQuality from '../components/SubjectMedicalQuality'
import ScientificTeaching from '../components/ScientificTeaching'
export default {
  name: 'KeyDisciplinesExamine',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    SubjectBasicData,
    BasicConditionsOfDiscipline,
    SubjectTechnicalTeam,
    SubjectServiceAbility,
    SubjectMedicalQuality,
    ScientificTeaching
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.KeyDisciplinesExamine >>> .tabs
  .tab-pane
    width 32%
    margin-bottom 4px
    &:nth-of-type(2n)
      margin-bottom 0
.KeyDisciplinesExamine
  margin 0 6px
  padding 20px 0 10px 0
</style>
