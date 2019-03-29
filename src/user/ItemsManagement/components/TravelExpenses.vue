// 差旅费申请
<template>
  <div class="TravelExpenses">
    <div class="wrapper one">
      <div class="item-wrapper border-1px">
        <p class="item-title">会议级别：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
    </div>
    <CTitle>差旅费申请</CTitle>
    <div class="wrapper">
      <p class="title">差旅费信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">主办单位：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">会议地点：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">会议日期：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">经费来源：</p>
        <JRadioGrounp v-model="select">
          <JRadio name="0">医院经费</JRadio>
          <JRadio name="1">项目经费</JRadio>
        </JRadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">会务费（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">住宿费（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">交通费（元）：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">资料费（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">其他费用（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">交流形式：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">发明专利请求书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">主要内容：</p>
        <textarea></textarea>
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
import JRadioGrounp from '@/components/radio/JRadioGrounp'
import JRadio from '@/components/radio/JRadio'
export default {
  namw: 'TravelExpenses',
  data () {
    return {
      select: '0',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JInput,
    JRadioGrounp,
    JRadio
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.TravelExpenses
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 30px
    position relative
    &.one
      margin-top 10px
      margin-bottom 0
      padding-top 0
      .item-wrapper
        .J-input
          width 1.65rem
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
        display block
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
    .upload
      border none
      // display inline-block
      width 100%
      text-align center
      height 37px
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height 14px
        width 75px
        opacity 0
        left 50%
        margin-left -37.5px
      .text
        position absolute
        font-size 14px
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width 19px
          height 19px
          vertical-align bottom
          margin-right 10px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
</style>
