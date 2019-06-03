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
          <p class="j-input">全体人员</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目来源</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">00902</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">29384</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">2000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">100</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">1年</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">2018.10.12</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">状态1</p>
        </div>
      </div>
    </div>
    <tabs v-model="clickTab">
      <tab title="总经费决算" name="0">
        <table cellspacing="0">
          <tr class="bottom">
            <th>项目</th>
            <th>预算数</th>
            <th>实际数</th>
            <th>结余数</th>
            <th>备注</th>
          </tr>
          <tr class="move">
            <th>直接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th>会议费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th>间接经费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th>设备费</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
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
            <th>预算数</th>
            <th>实际数</th>
            <th>结余数</th>
            <th>备注</th>
          </tr>
          <tr class="move">
            <th>费用合计</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">项目负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">财务负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
        </table>
      </tab>
      <tab title="匹配经费决算" name="2">
        <table cellspacing="0">
          <tr class="bottom">
            <th>项目</th>
            <th>预算数</th>
            <th>实际数</th>
            <th>结余数</th>
            <th>备注</th>
          </tr>
          <tr class="move">
            <th>费用合计</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">项目负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">财务负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
        </table>
      </tab>
      <tab title="其他经费决算" name="3">
        <table cellspacing="0">
          <tr class="bottom">
            <th>项目</th>
            <th>预算数</th>
            <th>实际数</th>
            <th>结余数</th>
            <th>备注</th>
          </tr>
          <tr class="move">
            <th>费用合计</th>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>占位</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">项目负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
          <tr class="move">
            <th colspan="4" style="text-align:left">财务负责人（打印、签名）</th>
            <td>陈阿斌</td>
          </tr>
        </table>
      </tab>
    </tabs>

    <!-- <Popup v-model="show" position="center" title="详情">
      <div class="detail">
        <p class="detail-title">{{desc}}</p>
        <p class="detail-desc">设备费用鼠标移上显示说明占位</p>
        <p class="detail-detail">详情占位</p>
      </div>
    </Popup> -->
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import Popup from '@/components/popup/popup2'
export default {
  name: 'FundsFinalAccountsDetail',
  data () {
    return {
      clickTab: 0,
      show: false,
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
  table
    width 100%
    border-collapse:separate
    text-align center
    font-size: .14rem;
    font-weight 400
    margin-top .10rem
    table-layout fixed
    .bottom
      background: #003BAA;
      th
        padding-bottom .13rem
        padding-top .13rem
        color white
        font-weight 400
    .move
      width 100%
      td
        border-bottom 1px solid rgba(0,0,0,0.5)
        height .26rem
        background: #FFFFFF;
        color: #999999;
      th
        border-bottom 1px solid rgba(0,0,0,0.5)
        height .26rem
        background: #FFFFFF;
        text-align center
        padding-left 5px
        font-weight 400
      .blue
        color $blue
        font-weight 700
  .detail
    padding .09rem .1rem
    height 1.79rem
    box-sizing border-box
    .detail-title
      font-size .14rem
      font-weight 700
      line-height .18rem
      margin-bottom .04rem
    .detail-desc
      font-size .12rem
      line-height .16rem
      color: #999999;
      margin-bottom .07rem
    .detail-detail
      font-size .12rem
      line-height .16rem
      margin 0 .1rem
.FundsFinalAccountsDetail >>> .tabs
  .tab-pane
    width 23.5%
</style>
