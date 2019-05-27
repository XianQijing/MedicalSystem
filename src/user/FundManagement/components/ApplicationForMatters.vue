// 事项申请
<template>
  <div class="ApplicationForMatters">
    <div class="wrapper">
      <JInput type="select" placeholder="类别下拉选择"></JInput>
      <JInput type="select" placeholder="项目下拉选择"></JInput>
    </div>
    <div class="s shuo wrapper">
      <div class="formCell">
        <span>项目编号：29382</span>
        <span>财务编号：92873</span>
      </div>
      <p class="black border-1px">项目负责人-所属科室</p>
      <p class="black">项目名称</p>
      <p>项目类别-项目计划</p>
      <div class="formCell">
        <p>项目总额：20000.00</p>
        <p>项目余额：20000.00</p>
      </div>
    </div>

    <CTitle>经费审批申请</CTitle>
    <div class="wrapper shuo" style="padding-top: 0">
      <p class="title">经费审批申请</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">支出金额（元）：</p>
        <JInput placeholder="填写金额"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">支出科目：</p>
        <div class="two">
          <JInput placeholder="填写内容" type="select"/>
          <JInput placeholder="填写内容" type="select"/>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">支付形式：</p>
        <JRadioGrounp v-model="radio">
          <JRadio name="0">已预算</JRadio>
          <JRadio name="1">未预算</JRadio>
        </JRadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">报销详细说明：</p>
        <textarea placeholder="填写支出说明"></textarea>
      </div>
    </div>
    <div style="text-align:center">
      <JButton type="primary" round @click="jump">确认提交</JButton>
    </div>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  namw: 'ApplicationForMatters',
  data () {
    return {
      radio: '0',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    JRadio,
    JRadioGrounp
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplicationPort'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationForMatters
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding .10rem .10rem 0 .10rem
    margin-bottom .10rem
    &.shuo
      box-shadow none
    .title
      font-size .14rem;
      color: #333333;
    p
      font-size: .14rem;
      color: #333333;
      padding-top .15rem
    .black
      font-size .16rem
      &.border-1px
        padding-bottom .15rem
        border-1px(#D3D3D3)
    span
      font-size: .12rem;
      color: #555555;
    &:first-child
      margin-top .04rem
      padding-bottom .10rem
      display flex
      justify-content space-between
    &.s
      margin 0
      padding-bottom .10rem
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: .06rem;
      width 1.64rem
      display inline-block
      height .30rem
    .item-wrapper
      padding 0 .10rem .15rem .10rem
      position relative
      border-1px(#D3D3D3)
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: .16rem;
        color: #FD4D4D;
        vertical-align top
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top .1rem
        padding .06rem .1rem
        box-sizing border-box
        height .80rem
      .JRadioGrounp
        display inline-block
        position absolute
        top 50%
        right 0
        margin-top -7px
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: .06rem;
        width 1rem
        min-width 1.00rem
        height .30rem
        position absolute
        right 0
        top .08rem
        &:first-child
          right 1.03rem
</style>
