<template>
  <div class="wrapper">
    <p class="title">摘要用途</p>
    <div class="item-wrapper border-1px">
      <p class="item-title">一级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">二级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">三级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">四级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title a">用途：</p>
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'domestic'
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl';
.wrapper
  margin-top .10rem
  padding .15rem .10rem 0 .10rem
  background white
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
  .title
    font-size: .14rem;
    color: #333333
  .item-wrapper
    border-1px(#D3D3D3)
    padding .15rem .10rem
    position relative
    &:last-child
      border-none()
    .item-title
      display inline-block
      font-size: .16rem;
      color: #FD4D4D;
      vertical-align top
    .a
      width 8em
      margin-bottom .1rem
    .JRadioGrounp
      display inline-block
      float right
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: .06rem;
      width 1rem
      min-width 100px
      height .30rem
      position absolute
      right 0
      top 8px
    textarea
      border: 1px solid #FD4D4D;
      border-radius: 6px;
      display block
      width 100%
      margin-top .10rem
      padding .10rem
      box-sizing border-box
      height .80rem
  .upload
    border none
    // display inline-block
    width 100%
    text-align center
    height .37rem
    position relative
    input
      border none
      position absolute
      bottom 0
      margin 0
      padding 0
      height .14rem
      width .75rem
      opacity 0
      left 50%
      margin-left -37.5px
      z-index 20
    .text
      position absolute
      font-size .14rem
      color: #2873FF;
      bottom 0
      vertical-align bottom
      width 100%
      text-align center
      img
        width .19rem
        height .19rem
        vertical-align bottom
        margin-right .10rem
</style>
