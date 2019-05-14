<template>
  <div class="InfluenceListDetail">
    <div class="header">
      <p>上海中医药大学附属曙光医院科技影响力数据</p>
    </div>

    <table>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>数量</th>
      </tr>
      <tr>
        <td>1</td>
        <td>国家自然科学基金重大项目</td>
        <td>个</td>
      </tr>
      <tr>
        <td>1</td>
        <td>国家自然科学基金重大项目</td>
        <td>个</td>
      </tr>
      <tr>
        <td>1</td>
        <td>国家自然科学基金重大项目</td>
        <td>个</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InfluenceListDetail'
}
</script>

<style lang="stylus" scoped>
.InfluenceListDetail
  padding 10px 0 10px 0
  // margin 0 6px
  box-sizing border-box
  margin 0 6px
  .header
    height .8rem
    background-image url('../../../common/image/Group.png')
    p
      width 1.82rem
      margin 0 auto
      color white
      font-size .14rem
      line-height .18rem
      text-align center
      padding-top .2rem
  table
    margin-top .1rem
    text-align center
    width 100%
    th
      height .4rem
      background: #c90b0b;
      font-size .16rem
      color white
      padding 0 .2rem
    tr
      background white
      font-size .13rem
      height .4rem
      &:nth-of-type(2n)
        background: #ffe0e0;
</style>
