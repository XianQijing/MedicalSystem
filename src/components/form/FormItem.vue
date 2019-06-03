<template>
  <div
    class="FormItem"
    :class="[
      type,
      color ? `border--${color}` : '',
      {
        'is-flex': flex,
        'border-1px': bottom
      }
    ]"
  >
    <p class="label" :style="{lineHeight: `${lineHeight}rem`}">{{label}}:</p>
    <div class="input-wrapper" :style="{ height: `${inputHeight}rem`, width: `${width}rem` }">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    flex: Boolean,
    color: String,
    label: String,
    height: Number,
    bottom: Boolean,
    width: Number,
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    lineHeight () {
      return this.height > 0.3 ? 0.3 : this.height
    },
    inputHeight () {
      return this.height > 0.3 ? this.height - 0.3 : this.height
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.FormItem
  width 100%
  text-align left
  display flex
  justify-content space-between
  padding .07rem 0
  font-size .16rem
  box-sizing border-box
  textarea
    width 100%
  .label
    display inline-block
  &.border--red
    padding .08rem 0 .08rem 0.08rem
    .label
      color $red
    textarea
      border 1px solid $red
      border-radius .06rem
      height 100%
    .input-wrapper
      width 35.9%
      min-width 100px
  &.border--red >>> .J-input
    padding 0
    .text
      border 1px solid $red
      border-radius .06rem
  &.border--black
    padding .08rem 0 .08rem 0
    line-height .18rem
    .label
      color #555555
      vertical-align top
    textarea
      border 1px solid $red
      border-radius .06rem
      height 100%
    .input-wrapper
      width 35.9%
      min-width 100px
  &.border--black >>> .J-input
    // padding 0
    border 1px solid $red
    border-radius .06rem
    // .text
  &.border--blue
    padding .08rem 0 .08rem 0.08rem
    textarea
      border 1px solid $blue
      border-radius .06rem
      height 100%
    .input-wrapper
      width 35.9%
      min-width 100px
      // width 1.54rem
  &.border--blue >>> .J-input
    border 1px solid $blue
    border-radius .06rem
  &.border-1px
    border-1px(#d3d3d3)
  &.textarea
    display inline-block
    .label
      padding-bottom .08rem
    .input-wrapper
      width 100%
</style>
