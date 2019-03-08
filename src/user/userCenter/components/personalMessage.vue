<template>
  <div class="personalMessage">
    <c-title>基本信息</c-title>
    <base-message/>
    <c-title>可修改信息</c-title>
    <div class="canEdit">
      <p class="num">320682199209063777</p>
      <p class="name">1992-08-09、男、汉族</p>
      <p class="address">15221135677、17263@163.com</p>
      <p class="border border-1px">学历、学位、毕业院校、专业</p>
      <div class="doctor">
        <span class="docNum">医师资格号:2837362</span>
        <span class="registerNum">执业医师注册证号:8732927372</span>
      </div>
      <p class="name">职务、职业类别、工作年限</p>
      <p>博导、政治面貌、社会任职</p>
    </div>
    <c-title>系统信息</c-title>
    <div class="systemMessage">
      <div class="doctor">
        <span>注册日期：2017.09.01</span>
        <span>最近登录：2018.09.01 12:00</span>
      </div>
      <p class="num">登录次数：251</p>
      <div class="wapper">
        <div class="aBlock" v-for="(one, i) in blockList" :key="i">
          <p class="number">{{i}}</p>
          <div class="title">
            <p>{{one}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import BaseMessage from './baseMessage'
export default {
  name: 'PersonalMessage',
  data () {
    return {
      blockList: ['项目申报', '中标项目', '经费总额', '论文投稿', '发表论文', '专利申请', '专利授权', '成果登记', '科技获奖', '出版著作', '学术任职', '主办活动']
    }
  },
  components: {
    CTitle,
    BaseMessage
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.personalMessage
  .canEdit, .systemMessage
    margin 0 6px
    background white
    padding 15px 10px
    .name
      font-size: 16px;
      color: #333333;
      font-weight 700
      margin-bottom 12px
    .address
      margin-bottom 12px
      font-size 14px
      line-height 18px
    p
      font-size 14px
      color: #333333
    .border
      padding-bottom 15px
      border-1px(#D3D3D3)
    .num
      font-size: 12px;
      color: #555555;
      margin-bottom 15px
    .doctor
      display flex
      justify-content space-between
      font-size: 12px;
      color: #555555;
      margin 15px 0
  .systemMessage
    .num
      margin-bottom 0
    .doctor
      margin-top 0
    .wapper
      display flex
      justify-content space-between
      flex-wrap wrap
      .aBlock
        width 22.8%
        height 48px
        border 1px solid black
        border-radius: 4px;
        margin-top 15px
        display flex
        align-items center
        .number
          display inline-block
          font-weight 700
          vertical-align top
          font-size: 20px;
          color: #333333;
          text-align: center;
          flex 2 1 44px
          border-right 1px solid #D3D3D3;
        .title
          vertical-align top
          display inline-block
          flex 1 0 34px
          p
            text-align center
            font-size: 12px
            line-height 15px
            width 34px
            margin 0 auto
</style>
