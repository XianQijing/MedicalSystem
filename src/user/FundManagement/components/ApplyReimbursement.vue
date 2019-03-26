// 经费报销申请
<template>
  <div class="ApplicationEntry">
    <div class="wrapper">
      <JInput type="select"></JInput>
      <JInput type="select"></JInput>
    </div>
    <div class="s wrapper">
      <span>项目编号：29382</span>
      <span>财务编号：92873</span>
      <p class="black">项目负责人-所属科室</p>
      <p class="black">项目名称</p>
      <p>项目类别-项目计划</p>
      <div class="formCell">
        <p>项目总额：20000.00</p>
        <p>项目余额：20000.00</p>
      </div>
    </div>

    <CTitle>
      申请端口
      <span slot="float">添加</span>
    </CTitle>
    <div class="green">
      <div class="middle">
        <span class="msg">2017年12月09日科研报销信息</span>
        <span class="delete">删除</span>
      </div>
      <div class="desc">
        <div class="sum-price border-1px">
          <span>报销金额</span>
          <span class="num">9000.00</span>
        </div>
        <div class="detail-price">
          <div>
            <p>项目经费</p>
            <p class="num">3000.00</p>
          </div>
          <div>
            <p>匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p>其他经费</p>
            <p class="num">4000.00</p>
          </div>
        </div>
      </div>
      <div class="arrow" @click="jump">
        <span class="iconfont">&#xe7eb;</span>
      </div>
    </div>
    <!--  -->
    <CTitle>报销详细说明</CTitle>
    <div class="wrapper shuo" style="padding-top: 0">
      <div class="item-wrapper border-1px">
        <p class="item-title">报销详细说明：</p>
        <textarea></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  namw: 'ApplicationEntry',
  data () {
    return {
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JInput
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
.ApplicationEntry
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 10px
    p
      font-size: 14px;
      color: #333333;
      padding-top 15px
    .black
      font-size 16px
    span
      font-size: 12px;
      color: #555555;
      margin-bottom 10px
    &:first-child
      margin-top 10px
      padding-bottom 10px
      display flex
      justify-content space-between
    &.s
      margin 0
      padding-bottom 10px
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: 6px;
      width 1.64rem
      display inline-block
      height 30px
    .item-wrapper
      padding 0 10px 15px 10px
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
  .green
    background: #45C186;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 15px 0 15px 10px
    color white
    .middle
      display flex
      justify-content space-between
      align-items center
      .msg
        font-size: 16px;
      .delete
        font-size 13px
        margin-right 10px
    .desc, .arrow
      display inline-block
      text-align center
      vertical-align middle
    .desc
      .sum-price
        width 3.14rem
        border-1px(#D3D3D3)
        padding 15px 0 15px 0
        span
          font-size: 14px
          &:last-child
            font-size 20px
            margin-left 20px
      .detail-price
        display flex
        justify-content space-between
        margin-top 15px
        div
          flex 1
          p
            font-size: 14px
          .num
            font-size 20px
            margin-top 16px
    .arrow
        margin-top -20px
        width .313rem
      .iconfont
        font-size 25px
</style>
