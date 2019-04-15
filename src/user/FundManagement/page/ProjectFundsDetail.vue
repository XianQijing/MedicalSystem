// 项目经费--详情
// 状态查询及打印--查看详情
<template>
  <div class="ProjectFundsDetail">
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
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">参加人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">外省人数</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">外院人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">演讲PPT</p>
        </div>
      </div>
    </div>

    <div class="content blue">
      <p class="title">到款入项金额</p>
      <div>
        <span>到款总额</span>
        <span class="num">9000.00</span>
      </div>
    </div>

    <div class="content green">
      <div class="formCell">
        <p class="title">第一期经费额度</p>
        <p class="num">分项合计：2938.00<span @click="jump('第一期经费额度')" class="iconfont">&#xe7eb;</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectFundsDetail',
  data () {
    return {
    }
  },
  methods: {
    jump (msg) {
      this.$router.push({name: 'AmountOfFunds', query: {msg: msg}})
      document.title = msg
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectFundsDetail
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
        font-weight 700
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
  .content
    background white
    padding 15px 10px
    color: #FFFFFF;
  .blue
    background: #003BAA;
    margin-top 10px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    margin-bottom 10px
    .title
      font-size: 16px;
    div
      margin-top 15px
      text-align center
      span
        font-size: 14px;
      .num
        font-size: 20px;
        margin-left 20px
  .green
    background: #45C186;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    color white
    position relative
    margin-bottom 4px
    .formCell
      align-items center
      width 93%
    .title
      font-size: 16px;
    .num
      font-size: 14px;
      .iconfont
        font-size 25px
        position absolute
        right 0
        top 50%
        margin-top -12.5px
</style>
