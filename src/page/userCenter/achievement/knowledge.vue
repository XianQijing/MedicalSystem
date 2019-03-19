<template>
  <div class="knowledge">
    <collaspe name="单位拥有知识产权">
      <table cellspacing="0">
        <tr class="top">
          <th rowspan="2" style="padding: 0">名称</th>
          <th>专利</th>
          <th>申请</th>
          <th colspan="2">发明</th>
          <th colspan="2">实用新型</th>
        </tr>
        <tr class="bottom">
          <th>申请</th>
          <th>专利</th>
          <th>申请</th>
          <th>专利</th>
          <th>申请</th>
          <th>专利</th>
        </tr>
        <tr class="move">
          <th>单位</th>
          <td>5</td>
          <td>7</td>
          <td>2</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr class="move">
          <th>单位</th>
          <td>5</td>
          <td>7</td>
          <td>2</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr class="move">
          <th>单位</th>
          <td>5</td>
          <td>7</td>
          <td>2</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr class="move" style="text-align:left">
          <th colspan="3">其它知识产权证明</th>
          <td colspan="4">占位</td>
        </tr>
      </table>
    </collaspe>
    <collaspe name="项目技术信息">
    </collaspe>
    <collaspe name="单位拥有知识产权">
    </collaspe>
    <collaspe name="项目技术信息">
    </collaspe>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'Knowledge',
  data () {
    return {
      tableData: [
        {
          name: '单位',
          zhuanLi: 5,
          shouquan: 7,
          shenqing: 2,
          faming: 4,
          xingShenqing: 3,
          xingShouquan: 3
        }
      ]
    }
  },
  components: {
    Collaspe,
    JTable,
    TableColums
  }
}
</script>

<style lang="stylus" scoped>
.knowledge
  margin-top 5px
  table
    width 100%
    border-collapse:separate
    text-align center
    font-size: 14px;
    font-weight 400
    .top
      background: #003BAA;
      th
        padding-top 13px
        color white
        font-weight 400
    .bottom
      background: #003BAA;
      th
        padding-bottom 13px
        padding-top 10px
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
        text-align left
        padding-left 5px
</style>
