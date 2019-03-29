// 科研合作--事项申请
<template>
  <div class="CooperationApplication">
    <div class="wrapper one">
      <div class="item-wrapper border-1px">
        <JInput placeholder="下拉选择" type="select"/>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
    </div>

    <div class="white">
      <p class="black">项目负责人-项目类别</p>
      <p>项目单位：上海市卫计委</p>
      <p>合作科室：眼科</p>
    </div>

    <CTitle>科研合作申请</CTitle>
    <div class="wrapper">
      <p class="title">合作申请</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">合作申请人：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">合作期限：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">合作经费（元）：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">项目总经费（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">发明专利请求书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
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
export default {
  namw: 'CooperationApplication',
  data () {
    return {
      select: '0',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JInput
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.CooperationApplication
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
      position static
      .item-wrapper
        position static
        display flex
        justify-content space-between
        .J-input
          position static
          width 48%
          display inline-block
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
.white
  background white
  padding 10px 10px
  margin-top 15px
  p
    margin-top 15px
    &.black
      margin 0
</style>
