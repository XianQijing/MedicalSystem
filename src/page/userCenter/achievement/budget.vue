<template>
  <table cellspacing="0">
    <tr class="bottom">
      <th>项目</th>
      <th>项目经费</th>
      <th>匹配经费</th>
      <th>其他经费</th>
      <th>备注</th>
    </tr>
    <tr class="move">
      <th>直接经费</th>
      <td>5</td>
      <td>7</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr class="move">
      <th>设备费</th>
      <td>5</td>
      <td>7</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr class="move">
      <th>会议费</th>
      <td>5</td>
      <td>7</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr class="move">
      <th>间接经费</th>
      <td>5</td>
      <td>7</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr class="move">
      <th>设备费</th>
      <td>5</td>
      <td>7</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr class="move">
      <th style="text-align:left">总计</th>
      <td>占位</td>
      <td colspan="3"></td>
    </tr>
    <tr class="move">
      <th style="text-align:left">合计</th>
      <td>占位</td>
      <td colspan="3"></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Budget'
}
</script>

<style lang="stylus" scoped>
table
  width 100%
  border-collapse:separate
  text-align center
  font-size: 14px;
  font-weight 400
  table-layout fixed
  .bottom
    background: #003BAA;
    th
      padding-bottom 13px
      padding-top 13px
      color white
      font-weight 400
  .move
    width 100%
    td
      border-bottom 1px solid rgba(0,0,0,0.5)
      height 26px
      background: #FFFFFF;
      color: #999999;
    th
      border-bottom 1px solid rgba(0,0,0,0.5)
      height 26px
      background: #FFFFFF;
      text-align center
      padding-left 5px
      font-weight 400
</style>
