<template>
  <div class="FundingApproval">
    <CTitle :screen="true" :textList="textList">经费列表</CTitle>
    <div class="card">
      <span>NO：00210</span>
      <p class="border-1px black">负责人-所属科室</p>
      <p class="black">项目名称</p>
      <p>项目计划</p>
      <p>项目计划</p>
      <p>项目计划</p>
      <p class="resTime">项目计划</p>
      <div class="btn">
        <button class="butto" @click="jump">审批</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FundingApproval1',
  data () {
    return {
      textList: ['时间范围']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail', query: {msg: '审核'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.FundingApproval
  .card
    margin 0 6px 10px 6px
    background white
    padding 10px
    p
      font-size 14px
      padding-top 15px
    .black
      font-size 16px
    span
      color: #555555
      font-size: 12px;
    .border-1px
      border-1px(#d3d3d3)
      padding-bottom 15px
    .resTime
      color: #999999
      font-size 12px
</style>
