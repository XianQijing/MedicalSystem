<template>
  <div class="J-input" :class="{'icon': iconClass}">
    <div class="text ss" v-if="type==='text'">
      <slot></slot>
      <input :type="text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
        >
        <slot name="footer"></slot>
    </div>

    <div class="text" v-if="type==='clearable'">
      <slot></slot>
      <input type="text"
        :value="value"
        :placeholder="placeholder"
        ref="text"
        @input="getValue($event.target.value)"
        @blur="blur"
        @focus="focus"
        >
        <div class="clearable" v-show="clear">
          <img @click="toClear" :src="image" :width="width" alt="">
        </div>
    </div>

    <div @click="open($event)" class="aSelect" v-if="type==='select'">
      <input
        class="select"
        type="text"
        :value="value"
        readonly="readonly"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        >
    </div>
    <iconSvg v-if="iconClass" @click="clickIcon" :iconClass="iconClass"></iconSvg>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup'
export default {
  data () {
    return {
      clear: false
    }
  },
  props: {
    value: {},
    iconClass: '',
    type: {
      type: String,
      default: 'text'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    placeholder: {},
    text: {
      type: String,
      default: 'text'
    },
    image: {
      default: require('./image/delete.png')
    },
    width: {
      type: String,
      default: '20px'
    }
  },
  components: {
    Popup
  },
  methods: {
    open (e) {
      this.$emit('click', e)
    },
    blur () {
      this.clear = false
    },
    focus () {
      this.clear = true
    },
    toClear () {
      this.$emit('input', '')
    },
    getValue (value) {
      this.$emit('input', value)
    },
    clickIcon () {
      this.$emit('clickIcon')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.J-input
  padding 0 .10rem
  height 100%
  display flex
  align-items center
  margin 0
  box-sizing border-box
  // font-size .14rem
  &.icon
      padding-right 0
    .text
      width calc(100% - .27rem)
    .svg-icon
      color $blue
      font-size .2rem
      margin 0 0.06rem 0 0.06rem
  .text
    background none
    width 100%
    height 100%
    position relative
    .clearable
      position absolute
      top 0
      right 0
      display flex
      align-items center
      height 100%
      padding 0 10px 0 5px
      background-color: none;
  input
    width 100%
    // font-size: 14px;
    height 100%
    background none
  .aSelect
    background-size .12rem
    background-position center right
    padding 0 .12rem 0 0
    bg-image(arrow)
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 100%
    .select
      cursor: not-allowed
      pointer-events:none
  // .icon
  //   input
  //     width calc(100% - .27rem)
  //   .svg-icon
  //     color $blue
  //     font-size .15rem
  //     margin 0 0.06rem 0 0
  .text
    input:focus::-webkit-input-placeholder
      color: transparent;
    input:focus:-moz-placeholder
      color: rgb(161, 161, 161);
    input:focus::-moz-placeholder
      color: transparent;
    input:focus::-ms-input-placeholder
      color: transparent;
  input::-webkit-input-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
    // font-size 12px
  input:-moz-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
    // font-size 12px
  input::-moz-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
    // font-size 12px
  input::-ms-input-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
    // font-size 12px
</style>
