<template>
  <div class="comTitle">
    <div v-if="screen === false">
      <p class="green"></p>
      <p class="font">
        <slot></slot>
      </p>
      <div class="float">
        <slot name="float"></slot>
      </div>
    </div>
    <!--  -->
    <div v-if="screen === true">
      <p class="green"></p>
      <p class="font">
        <slot></slot>
      </p>
      <div class="float" @click="close">
        {{screenText}}
        <span class="screen"></span>
      </div>

      <popup :toShow="show" @close="close">
        <popup-data v-if="witchOne === 'default'" :keyName="keyName" :textList="textList" @click="complete"/>
        <admin-data v-if="witchOne === 'admin'" @click="complete"/>
      </popup>
    </div>
  </div>
</template>

<script>
import Popup from '../popup/popup'
import PopupData from './components/popupData'
import AdminData from './components/adminData'
export default {
  name: 'ComTitle',
  data () {
    return {
      show: false
    }
  },
  props: {
    screen: {
      type: Boolean,
      default: false
    },
    screenText: {
      type: String,
      default: '筛选'
    },
    textList: {
      type: Array
    },
    witchOne: {
      type: String,
      default: 'default'
    },
    keyName: {
      type: String
    }
  },
  components: {
    Popup,
    PopupData,
    AdminData
  },
  methods: {
    close () {
      this.show = !this.show
    },
    complete (form) {
      this.$emit('complete', form)
      this.close()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.comTitle
  padding .15rem 0
  height .13rem
  font-size: .13rem;
  .green
    border-radius .04rem
    border-left .025rem solid rgba(69,193,134,1);
    border-right .025rem solid rgba(69,193,134,1);
    height .13rem
    width 0
    display inline-block
    margin-right 4px
    vertical-align top
  .font
    display inline-block
    vertical-align top
    line-height .13rem
  .float
    float right
    color #2873FF
    font-size: .13rem;
    div
      vertical-align top
    .screen
      display inline-block
      width .13rem
      height .13rem
      background-size .13rem
      vertical-align top
      bg-image(screen)
</style>
