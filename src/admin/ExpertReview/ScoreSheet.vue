<template>
  <div class="ScoreSheet">
    <div class="orange">
      <h1>一级指标名称1</h1>
      <p>二级指标名称占位占-三级指标名称占位占-四级指标名称占位占</p>
    </div>
    <div class="white">
      <div class="border-1px div">
        <h1>指标含义以及说明:</h1>
        <p>单位和科室重点学科管理及工作情况单位和科室重点学科管理及工作情况单位和科室重点</p>
      </div>
      <div class="div">
        <h1>评分标准:</h1>
        <p>单位和科室重点学科管理及工作情况单位和科室重点学科管理及工作情况单位和科室重点</p>
      </div>
      <div class="biao"><span>标准分值: </span><span class="num">4</span></div>
    </div>
    <CTitle>
      评分表单
      <span style="color: #555" slot="float">1/4</span>
    </CTitle>
    <div class="form">
      <div class="formCell border-1px">
        <p class="form-label">实际得分:</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">扣分:</p>
        <JInput/>
      </div>
      <div class="form-Cell border-1px no-padding">
        <div class="form-label">
          <img src="../../common/image/turnLeft.png"/><span>扣分理由:</span>
          <img src="../../common/image/turnRight.png"/>
        </div>
        <textarea class="margin"/>
      </div>
      <div class="form-Cell">
        <p class="form-label">备注:</p>
        <textarea/>
      </div>
    </div>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete" @click="jump">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreSheet',
  methods: {
    jump () {
      this.$router.push({name: 'Result'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.ScoreSheet
  margin 0 6px
  padding 10px 0 40px 0
  .comTitle
    margin 0
  .orange
    padding 10px
    background: #da7900
    color white
    margin-bottom 4px
    h1
      font-size .14rem
      line-height .18rem
    p
      font-size .12rem
      margin-top .03rem
      line-height .15rem
  .white
    padding 0 10px
    background white
    .border-1px
      border-1px(#d3d3d3)
    .div
      padding .15rem 0
      h1
        font-size .14rem
        margin-bottom .05rem
      p
        font-size .16rem
        line-height .2rem
        height .4rem
        text-wrap()
    .biao
      color white
      background: #45c186;
      width 1.15rem
      font-size .14rem
      padding .07rem
      span
        vertical-align middle
      .num
        margin 0 .15rem
        font-size .2rem
  .form
    background white
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding 0 10px
    .border-1px
      border-1px(#d3d3d3)
    .formCell
      height .45rem
      align-items center
    .formCell, .form-Cell
      color #fd4d4d
      font-size .16rem
      padding 0 0 0 10px
      &.no-padding
        padding 0
      .J-input
        height: .3rem;
        border: 1px solid #fd4d4d;
        border-radius: .06rem
        width 1rem
      textarea
        border: 1px solid #fd4d4d
        border-radius: .06rem
        width 100%
        height .6rem
        margin-bottom .06rem
      .margin
        margin-left 10px
        width calc(100% - 10px)
      .form-label
        line-height .36rem
        font-size .16rem
        span
          margin-left 4px
        img
          height .24rem
          vertical-align: middle;
          color #e7e7e7
          &:last-child
            float right
            line-height .36rem
            margin-top .05rem
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
