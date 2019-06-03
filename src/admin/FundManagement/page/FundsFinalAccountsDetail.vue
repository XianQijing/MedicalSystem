// 经费决算--查询
<template>
  <div class="FundsFinalAccountsDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">项目类别</p>
        <p class="black">内分泌科</p>

        <p class="plane">项目计划</p>
        <p class="black">
          项目计划
        </p>
        <p class="plane">立项时间</p>
        <p class="black">2018.09.01 12:32:12</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目负责人:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">所属科室:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">参加人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">外省人数</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">外院人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">演讲PPT</p>
        </div>
      </div>
    </div>
    <tabs v-model="clickTab">
      <tab title="总经费决算" name="0">
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
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>4</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>会议费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>间接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
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
      </tab>
      <tab title="项目经费决算" name="1">
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
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>4</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>会议费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>间接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
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
      </tab>
      <tab title="匹配经费决算" name="2">
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
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>4</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>会议费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>间接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
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
      </tab>
      <tab title="其他经费决算" name="3">
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
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>4</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>会议费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
          </tr>
          <tr class="move">
            <th>间接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td></td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td @click="openPop = true" class="blue">详情</td>
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
      </tab>
    </tabs>
    <Popup v-model="openPop" title="详情" position="center">
      <div class="popContent">
        <h1>设备费</h1>
        <h2>设备费用鼠标移上显示说明占位</h2>
        <p>当申报书所有信息上传无误后，可以提交申报书，申报书提交后不可修改。当申报书所有信息上传无误后，可以提交申报书，申报书提交后不可修改。如需修改必须联系单位或相关科教主管部门退回修改。当申报书所有信息上传无误后，可以提交申报书，申报书提交后不可。</p>
      </div>
    </Popup>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import JTable from '@/components/table/table'
import Popup from '@/components/popup/popup2'
import JTableColums from '@/components/table/table-colums'
export default {
  name: 'FundsFinalAccountsDetail',
  data () {
    return {
      clickTab: 0,
      openPop: false,
      tableList: [
        {
          index: 1,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        },
        {
          index: 2,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        },
        {
          index: 3,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        }
      ]
    }
  },
  components: {
    Tab,
    Tabs,
    JTable,
    JTableColums,
    Popup
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundsFinalAccountsDetail
  padding 10px 6px
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom 2px
    div
      // height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 119px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-weight 700
        font-size 16px
        line-height 20px
        margin-bottom 20px
    .base-right
      flex 2 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 181px
          color: #999999;
          height 100%
          text-align right
          font-size 12px
          line-height 26px
  .tabs
    margin-top 10px
  .j-table
    margin-top 10px
  .popContent
    padding .1rem
    h1
      font-size .14rem
      line-height .2rem
      font-weight 700
      margin-bottom .04rem
    h2, p
      font-size .12rem
      line-height .17rem
    h2
      color #999999
      margin-bottom .07rem
    p
      padding 0 .1rem
  table
    width 100%
    border-collapse:separate
    text-align center
    font-size: 14px;
    font-weight 400
    margin-top 10px
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
      .blue
        color $blue
.FundsFinalAccountsDetail >>> .tabs
  .tab-pane
    width 23.5%
</style>
