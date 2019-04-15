<template>
  <div class="ScientificResearchTopic">
    <CTitle>专利分类</CTitle>
    <div class="card">
      <div class="formCell border-1px">
        <span>NO：00210</span>
      </div>
      <table>
        <tr>
          <th>申报得分</th>
          <th>项目得分</th>
          <th>奖励费</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
    </div>
    <CTitle>著作分类</CTitle>
    <div class="card">
      <div class="formCell border-1px">
        <span>NO：00210</span>
      </div>
      <table>
        <tr>
          <th>申报得分</th>
          <th>项目得分</th>
          <th>奖励费</th>
        </tr>
        <tr>
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
  name: 'ScientificResearchTopic',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchTopic
  .comTitle
    margin 0
  .card
    padding 10px 0
    background white
    .border-1px
      padding-bottom 15px
      border-1px(#d3d3d3)
      font-size 12px
      padding 0 0 15px 0
      margin 0 10px
  table
    width 100%
    text-align center
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    margin-bottom 2px
    margin-top 10px
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
