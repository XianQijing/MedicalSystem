<template>
  <div class="Form" :class="{'is-fixed': fixed}">
    <div class="header">
      <p class="header-left"><slot name="header-left"/></p>
      <p class="header-right"><slot name="header-right"/></p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    fixed: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.Form
  text-align center
  width 100%
  padding 0 .12rem
  box-sizing border-box
  button
    // margin-top .1rem
  &.is-fixed
    margin-bottom .3rem
    button
      position fixed
      bottom 0
      width 50%
      &:nth-of-type(1)
        left 0px
        margin 0
      &:last-child
        right 0
        margin 0
  .header-left
    float left
    font-size .14rem
    margin-top .1rem
    margin-bottom .02rem
    line-height .18rem
  .header-right
    float right
    font-size .14rem
    margin-top .1rem
    margin-bottom .02rem
    line-height .18rem
</style>
