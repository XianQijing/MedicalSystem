<template>
  <div class="TalentBasicInformation">
    <div class="icon-wrapper" :class="msg">
      <div class="icon"
        v-for="(icon, index) in $store.state.TalentBasicInformation"
        :key="index"
        @click="active = index">
        <img :src="active === index ? icon.icon.active : icon.icon.normal">
        <p>{{icon.name}}</p>
        </div>
    </div>
    <BasicDataOfTalents :msg="msg" v-if="active === 0"/>
    <AcademicLevelOfTalents :msg="msg" v-if="active === 1"/>
    <TalentAchievement :msg="msg" v-if="active === 2"/>
  </div>
</template>

<script>
import BasicDataOfTalents from './BasicDataOfTalents'
import AcademicLevelOfTalents from './AcademicLevelOfTalents'
import TalentAchievement from './TalentAchievement'
export default {
  name: 'TalentBasicInformation',
  data () {
    return {
      active: 0,
      msg: null
    }
  },
  components: {
    BasicDataOfTalents,
    AcademicLevelOfTalents,
    TalentAchievement
  },
  created () {
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
.TalentBasicInformation
  .Detail
    margin 0 6px
  .icon-wrapper
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    background white
    margin-top .1rem
    .icon
      display inline-block
      text-align center
      width calc(100% / 3)
      img
        width .37rem
        margin .1rem 0 .04rem 0
      p
        color: #2873ff
        padding-bottom .12rem
        font-size .14rem
.Detail >>> .J-input
  pointer-events none
  .aSelect
    background none
  input
    text-align right
.Detail >>> .upload
  input
    pointer-events none
</style>
