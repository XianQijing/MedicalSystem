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
        <popup-data v-if="witchOne === 'default'" :textList="textList" @click="complete"/>
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
  margin 0 6px
  padding 10px 0
  height 13px
  font-size: 13px;
  .green
    border-radius 4px
    border-left 2.5px solid rgba(69,193,134,1);
    border-right 2.5px solid rgba(69,193,134,1);
    height 13px
    width 0
    display inline-block
    margin-right 4px
    vertical-align top
  .font
    display inline-block
    vertical-align top
    line-height 13px
  .float
    float right
    color #2873FF
    font-size: 13px;
    div
      vertical-align top
    .screen
      display inline-block
      width 13px
      height 13px
      background-size 13px
      vertical-align top
      bg-image(screen)
</style>
