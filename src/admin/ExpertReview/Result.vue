<template>
  <div class="Result">
    <CTitle>未评分项</CTitle>
    <div class="wrapper">
      <h1>未评分项目数量</h1>
      <div class="text">
        <span class="iconfont">&#xe611;</span><span class="num">3</span><span>项</span>
      </div>
    </div>
    <CTitle>未评分项目</CTitle>
    <div class="project">
      <h1>一级指标名称</h1>
      <p>二级指标名称占位占-三级指标名称占位占-四级指标名称占位占</p>
      <div class="btn">
        <button class="butto">评审</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style lang="stylus" scoped>
.Result
  .wrapper, .project
    margin 0 6px
    padding 10px
    background white
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    h1
      font-size .14rem
      padding-bottom .08rem
      line-height: .18rem
    .text
      text-align center
      span
        font-size .14rem
      .iconfont
        font-size .28rem
        color black
      .num
        font-size .3rem
        margin 0 .2rem
    p
      font-size .12rem
  .project
    margin-bottom 10px
</style>
