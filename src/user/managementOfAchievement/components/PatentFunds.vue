// 专利经费申请
<template>
  <div class="PatentFunds">
    <CTitle>专利经费申请</CTitle>
    <div class="wrapper">
      <p class="title">申请信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利名称：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利申请费（元）:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利奖励费（元）:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利维护费（元）:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">经费来源:</p>
        <JRadioGrounp v-model="radio">
          <JRadio name="0">医院经费</JRadio>
          <JRadio name="1">项目经费</JRadio>
        </JRadioGrounp>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  namw: 'PatentFunds',
  data () {
    return {
      radio: '',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JRadio,
    JRadioGrounp,
    JInput
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.PatentFunds >>> .JRadio
  img
    width 15px
.PatentFunds
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 30px
    position relative
    .title
      font-size 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        color: #2873FF;
        span
          margin-left 10px
    .item-wrapper
      border-1px(#D3D3D3)
      padding 15px 10px
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      .a
        width 8em
      .JRadioGrounp
        display inline-block
        float right
        font-size 14px
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
</style>
