<template>
  <div class="J-input">
    <div class="text" v-if="type==='text'">
      <input type="text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        >
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
    placeholder: {}
  },
  components: {
    Popup
  },
  methods: {
    open (e) {
      this.$emit('click', e)
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
  .text
    background none
    width 100%
  input
    width 100%
    font-size: 14px;
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
  input:-moz-placeholder
    color: rgb(161, 161, 161);
  input::-moz-placeholder
    color: rgb(161, 161, 161);
  input::-ms-input-placeholder
    color: rgb(161, 161, 161);
</style>
