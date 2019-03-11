<template>
  <div class="J-input">
    <div class="text" v-if="type==='text'">
      <input :type="text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
        >
        <slot></slot>
    </div>

    <div class="text" v-if="type==='clearable'">
      <input type="text"
        :value="value"
        :placeholder="placeholder"
        ref="text"
        @input="getValue($event.target.value)"
        @blur="blur"
        @focus="focus"
        >
        <div class="clearable" v-show="clear">
          <img @click="toClear" src="./image/delete.png" alt="">
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

      <!-- <popup position="bottom" :overlay='overlay' :toShow="show" @close="open">
        <slot></slot>
      </popup> -->
    <!-- <input type="text" :value="value"> -->
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.J-input
  padding 0 10px
  height 100%
  display flex
  align-items center
  margin 0
  box-sizing border-box
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
      background-color: rgb(239, 239, 244);
      img
        width 20px
        height 20px
  input
    width 100%
    font-size: 14px;
    height 100%
    background none
  .aSelect
    background-size 12px
    background-position center right
    padding 0 12px 0 0
    bg-image(arrow)
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 100%
    .select
      cursor: not-allowed
      pointer-events:none
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
  input:-moz-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
  input::-moz-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
  input::-ms-input-placeholder
    color: rgb(161, 161, 161);
    font-weight 400
</style>
