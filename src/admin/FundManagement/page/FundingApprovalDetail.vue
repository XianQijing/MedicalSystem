// 经费审批--查看详情
<template>
  <div class="FundingApprovalDetail">
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
    <table cellspacing="0">
      <tr class="bottom">
        <th>项目余额</th>
        <th>支出名目</th>
        <th>支出金额</th>
        <th>额度</th>
      </tr>
      <tr class="move">
        <td>5</td>
        <td>7</td>
        <td>2</td>
        <td>4</td>
      </tr>
      <tr class="move">
        <th colspan="3" style="text-align:left">支出说明：</th>
        <td>占位</td>
      </tr>
    </table>

    <div class="btn">
      <JButton type="primary" round @click="show=true">审核</JButton>
    </div>
    <popup position="center" v-model="show" title="项目审核">
      <div class="popup-form">
        <p class="form-label">评审意见</p>
        <textarea></textarea>
      </div>
      <div class="popup-form">
        <p class="form-label">单位意见</p>
        <JInput v-model="form.pass" type="select" @click="selected = true"></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </popup>

    <popup position="bottom" :overlay="false" v-model="selected">
      <van-picker
        :item-height="30"
        :columns="$store.state.columns"
        show-toolbar
        @cancel="selected = false"
        @confirm="onConfirm" />
    </popup>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
import Popup from '@/components/popup/popup2'
export default {
  name: 'FundingApprovalDetail',
  data () {
    return {
      clickTab: 0,
      show: false,
      selected: false,
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
      ],
      form: {
        pass: ''
      }
    }
  },
  components: {
    JTable,
    JTableColums,
    Popup
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundingApprovalDetail
  padding .10rem .06rem
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
      padding .10rem
      box-sizing border-box
      margin-right 2px
      flex 1 1 1.19rem
      p
        margin-bottom .10rem
        text-align center
      .plane
        font-size .12rem
      .black
        font-weight 700
        font-size .16rem
        line-height .20rem
        margin-bottom .20rem
    .base-right
      flex 2 1 2.40rem
      .form-cell
        form-cell-left(.12rem)
        margin-bottom 2px
        height .26rem
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 1.81rem
          color: #999999;
          height 100%
          text-align right
          font-size .12rem
          line-height .26rem
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
        padding-left .05rem
        font-weight 400
.popup-form
  padding 0 .15rem
  display flex
  justify-content space-between
  margin-top .10rem
  .form-label
    font-size: .14rem;
    color: #333333
    display inline-block
    line-height .30rem
  textarea
    border: 1px solid #2873FF;
    width 74%
    box-sizing border-box
    font-size: .14rem
    padding .05rem
    border-radius: .04rem;
    height .95rem
  .J-input
    border-radius: .04rem;
    font-size: .14rem
    border: 1px solid #2873FF;
    height .26rem
    box-sizing border-box
    width 74%
.button-cell
  font-size: .14rem
  margin-top .10rem
.btn
  margin .2rem 0
</style>
