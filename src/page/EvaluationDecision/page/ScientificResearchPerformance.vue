<template>
  <div class="ScientificResearchPerformance">
    <CTitle>
      绩效列表
      <span slot="float">筛选</span>
    </CTitle>

    <div class="card">
      <div class="formCell border-1px">
        <span>NO：00210</span>
        <span>项目年份：2016</span>
      </div>
      <table>
        <tr>
          <th>科研课题</th>
          <th>学科建设</th>
          <th>人才培养</th>
          <th>科研奖励</th>
          <th>期刊论文</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
      <table class="second">
        <tr>
          <th>成果申请</th>
          <th>专利申请</th>
          <th>出版著作</th>
          <th>学术任职</th>
          <th>学术活动</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
      <div class="two">
        <p>绩效总计：</p>
        <p>奖励总计：</p>
      </div>
      <div class="btn">
        <button @click="jump">详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScientificResearchPerformance',
  methods: {
    jump () {
      this.$router.push({name: 'PerformanceDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchPerformance
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
      padding 0 0 15px 0
      margin 0 10px
    .two
      display flex
      justify-content space-between
      margin-top 10px
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
  .second
    margin-top 4px
  .btn
    button
      width 100px
      height 30px
      background: #2873ff
      border-radius: 6px
      color white
      font-size: 14px
</style>
