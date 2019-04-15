<template>
  <div class="ResearchFunds">
    <CTitle>
      项目列表
      <span slot="float">筛选</span>
    </CTitle>

    <div class="card">
      <div class="formCell">
        <span>NO：00210</span>
        <span>项目年份：2016</span>
      </div>
      <p class="black border-1px">陈升息－眼科</p>
      <p class="black">项目名称</p>
      <p>项目类别</p>
      <p>项目计划占位</p>
      <table>
        <tr>
          <th>应收总额</th>
          <th>项目总额</th>
          <th>匹配总额</th>
          <th>其他总额</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchFunds'
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ResearchFunds
  .card
    margin 0 6px
    padding 10px 0
    background white
    .border-1px
      padding-bottom 15px
      border-1px(#d3d3d3)
    p
      font-size: 14px
      margin 0px 10px 15px 10px
      &.black
        font-size 16px
    .formCell
      font-size 12px
      padding 0 10px 15px 10px
  table
    width 100%
    text-align center
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    margin-bottom 2px
    th
      background: #003baa;
      color white
      font-size 14px
      font-weight 400
      height 40px
    td
      height: 26px;
      color: #999999;
      font-size: 14px;
</style>
