// 项目查询--详情
<template>
  <div class="AssessmentSearch">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">项目负责人</p>
        <p class="black">陈阿斌</p>

        <p class="plane">项目类别</p>
        <p class="black">单位级课题</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">考核次数:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">研究年限:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">已使用经费:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">拟完成日期:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">拟鉴定日期:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">手机号码:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱:</p>
          <p class="j-input">参加人数</p>
        </div>
        <div class="form-cell">
          <p class="label">课题执行情况表:</p>
          <p class="j-input">外省人数</p>
        </div>
      </div>
    </div>
    <CTitle>考核项目</CTitle>
    <div class="wrapper">
      <div class="icon" v-for="item in list" :key="item.name">
        <div class="img">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </div>
        <div class="desc">
          <p>原定指标:d3</p>
          <p>完成指标:3</p>
        </div>
        <p class="blue">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessmentSearch',
  data () {
    return {
      list: this.$store.state.ProjectIcon
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AssessmentSearch
  padding 10px 6px
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
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 119px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-size 16px
        line-height 20px
        margin-bottom 20px
    .base-right
      flex 2 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 181px
          color: #999999;
          height 100%
          text-align right
          font-size 12px
          line-height 26px
  .wrapper
    .icon
      display inline-block
      background white
      margin-left 0.04rem
      margin-bottom 0.04rem
      width 49.452%;
      &:nth-of-type(2n+1)
        margin-left 0
      .img
        background: #003baa
        width .7rem
        height .64rem
        box-sizing border-box
        text-align center
        padding .05rem 0
        display inline-block
        vertical-align top
        img
          width .23rem
          margin .07rem
        p
          color white
          font-size .12rem
      .desc
        font-size .12rem
        display inline-block
        vertical-align top
        width .68rem
        p
          padding-top 13px
      .blue
        vertical-align top
        display inline-block
        text-align center
        font-size .12rem
        color #2873ff
        line-height .64rem
</style>
