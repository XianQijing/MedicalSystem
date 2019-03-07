<template>
  <div class="comTitle">
    <p class="green"></p>
    <p class="font">
      <slot></slot>
    </p>
    <div class="float">
      <slot name="float"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComTitle'
}
</script>

<style lang="stylus" scoped>
.comTitle
  margin 0 6px
  padding 15px 0
  height 13px
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
    div
      vertical-align top
</style>
