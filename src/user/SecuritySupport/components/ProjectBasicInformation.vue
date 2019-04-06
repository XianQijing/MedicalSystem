<template>
  <div class="ProjectBasicInformation">
    <div class="icon-wrapper">
      <div
        class="icon"
        v-for="(item, index) in $store.state.ProjectBasicInformation"
        :key="index"
        @click="active = index"
        >
        <img :src="index === active ? item.icon.active : item.icon.normal" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <SubjectBasicInformation v-if="active === 0"/>
    <BasicConditions  v-if="active === 1"/>
    <SubjectTechnicalTeam  v-if="active === 2"/>
    <SubjectServiceAbility  v-if="active === 3"/>
    <SubjectMedicalQuality  v-if="active === 4"/>
    <SubjectScientificTeaching  v-if="active === 5"/>
  </div>
</template>

<script>
import SubjectBasicInformation from './SubjectBasicInformation'
import BasicConditions from './BasicConditions'
import SubjectTechnicalTeam from './SubjectTechnicalTeam'
import SubjectServiceAbility from './SubjectServiceAbility'
import SubjectMedicalQuality from './SubjectMedicalQuality'
import SubjectScientificTeaching from './SubjectScientificTeaching'
export default {
  name: 'ProjectBasicInformation',
  data () {
    return {
      active: 0
    }
  },
  components: {
    SubjectBasicInformation,
    BasicConditions,
    SubjectTechnicalTeam,
    SubjectServiceAbility,
    SubjectMedicalQuality,
    SubjectScientificTeaching
  }
}
</script>

<style lang="stylus" scoped>
.ProjectBasicInformation
  .icon-wrapper
    background white
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5)
    padding-bottom .1rem
    margin-top .1rem
    .icon
      display inline-block
      width calc(100% / 3)
      text-align center
      img
        width .36rem
        margin-top .12rem
        margin-bottom .05rem
      p
        color: #2873ff;
        font-size: .14rem
</style>
