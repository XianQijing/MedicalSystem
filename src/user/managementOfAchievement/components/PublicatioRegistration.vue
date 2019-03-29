// 著作登记
<template>
  <div class="TravelExpenses">
    <CTitle>著作登记</CTitle>
    <div class="wrapper">
      <p class="title">登记信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">著作名称:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">出版年月:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">ISBN号:</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">出版社:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">著作角色:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">著作角色姓名:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">印数（数量）:</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">字数（千字）:</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">定价（元）:</p>
        <JInput placeholder="下拉选择"/>
      </div>
    </div>

    <div class="wrapper">
      <div class="title">
        登记信息
        <div>
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">第1参编:</p>
        <JInput placeholder="下拉选择"/>
      </div>
    </div>

    <div class="wrapper">
      <div class="title">
        合作单位
        <div>
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">第1合作单位:</p>
        <JInput placeholder="下拉选择"/>
      </div>
    </div>

    <div class="wrapper margin">
      <p class="title">文件上传</p>
      <div class="item-wrapper border-1px">
        <p class="item-title a">著作封面:</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">著作版权页:</p>
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
    margin-bottom 10px
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
.margin
  margin-bottom 30px!important
</style>
