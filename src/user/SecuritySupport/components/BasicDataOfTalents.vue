<template>
  <div class="BasicDataOfTalents" :class="msg">
    <CTitle>基础数据</CTitle>
    <div class="white">
      <p class="balck">姓名-性别、出生年月</p>
      <p class="border-1px">学历、学位、毕业院校</p>
      <p class="balck">所属科室</p>
      <p>职称、职务</p>
      <p>工作年限、导师否</p>
      <p>单位名称</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicDataOfTalents',
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.BasicDataOfTalents
  .white
    background white
    padding 0.1rem .1rem
    p
      padding-top .15rem
      font-size .14rem
      &:first-child
        padding-top 0
    .balck
      font-size .16rem
    .border-1px
      border-1px(#d3d3d3)
      padding-bottom .15rem
.Detail
  margin 0 6px
  .comTitle
    margin 0
</style>
