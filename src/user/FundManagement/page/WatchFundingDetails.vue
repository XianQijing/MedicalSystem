// 经费明细--详情
<template>
  <div class="FundsFinalAccountsDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">项目类别</p>
        <p class="black">内分泌科</p>

        <p class="plane">项目计划</p>
        <p class="black">
          项目计划
        </p>
        <p class="plane">立项时间</p>
        <p class="black">2018.09.01 12:32:12</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目负责人:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">所属科室:</p>
          <p class="j-input">全体人员</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目来源</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">00902</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">29384</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">2000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">100</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">1年</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">2018.10.12</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">状态1</p>
        </div>
      </div>
    </div>
    <CTitle>项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>项目类别</span>
      <div class="formCell">
        <p>支出金额：200.00</p>
        <p>经费归属：项目经费</p>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'FundsFinalAccountsDetail',
  data () {
    return {
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundsFinalAccountsDetail
  padding .10rem .06rem 0 .06rem
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom 2px
    div
      // height 166px
    .base-left
      background white
      padding .10rem
      box-sizing border-box
      margin-right .02rem
      flex 1 1 1.19rem
      p
        margin-bottom .10rem
        text-align center
      .plane
        font-size .12rem
      .black
        font-weight 700
        font-size .16rem
        line-height .20rem
        margin-bottom .20rem
    .base-right
      flex 2 1 2.40rem
      .form-cell
        form-cell-left(.12rem)
        margin-bottom 2px
        height .26rem
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 1.81rem
          color: #999999;
          height 100%
          text-align right
          font-size .12rem
          line-height .26rem
  .card
    margin 0 .06rem
    .no, .user
        font-size: .12rem;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: .14rem;
      color: #333333;
      margin-bottom .15rem
    .black
      margin-top .15rem
      font-weight 700
      font-size: .16rem;
    .formCell
      p
        font-size: .14rem;
        color: #333333;
</style>
