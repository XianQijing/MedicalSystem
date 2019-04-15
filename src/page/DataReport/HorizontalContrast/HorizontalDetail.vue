<template>
  <div class="HorizontalDetail">
    <CTitle>数据结果</CTitle>
    <div class="card">
      <div class="border-1px formCell">
        <span>NO：001</span>
        <span>眼科</span>
      </div>
      <p class="black">科研课题：47</p>
      <div class="formCell">
        <p>国家级课题：23</p>
        <p>省部级课题：10</p>
      </div>
      <div class="formCell">
        <p>市局级课题：9</p>
        <p>区县级课题：8</p>
      </div>
      <div class="formCell border-1px">
        <p>大学级课题：10</p>
        <p>单位级课题：1</p>
      </div>
      <p class="black">科研课题：47</p>
      <div class="formCell">
        <p>国家级课题：23</p>
        <p>省部级课题：10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalDetail'
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.HorizontalDetail
  margin 0 6px
  .comTitle
    margin 0
  .card
    padding 10px
    background white
    span
      font-size .14rem
    p
      margin-top .15rem
      font-size .14rem
    .border-1px
      border-1px(#d3d3d3)
      padding-bottom .15rem
    .black
      font-size .16rem
</style>
