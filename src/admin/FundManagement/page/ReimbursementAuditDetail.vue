// 报销审核--查看
<template>
  <div class="ReimbursementAuditDetail">
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
    <div class="content">
      <Collaspe name="设备费经费信息">
        <JTable :data="tableList">
          <JTableColums label="经费总额" prop="index"/>
          <JTableColums label="项目经费" prop="name"/>
          <JTableColums label="匹配经费" prop="price"/>
          <JTableColums label="其他经费" prop="num"/>
        </JTable>
        <JTable :data="tableList">
          <JTableColums label="经费余额" prop="index"/>
          <JTableColums label="项目余额" prop="name"/>
          <JTableColums label="匹配余额" prop="price"/>
          <JTableColums label="其他余额" prop="num"/>
        </JTable>
        <div class="wrapper">
          <p class="wrapper-title">设备费计算依据和说明</p>
          <p class="wrapper-desc">设备费计算依据和说明</p>
        </div>
        <div class="history">
          <p>支出历史</p>
          <div class="time">
            <p class="time-icon">
              <span class="iconfont">&#xe608;</span>
            </p>
            <span class="date">2018.04.12</span>
          </div>
          <div class="history-wrapper">
            <p class="black">摘要占位</p>
            <p>用途说明</p>
            <p>经费归属：项目经费</p>
            <p>支出金额：300.00</p>
          </div>
        </div>
      </Collaspe>
      <Collaspe name="本次审核信息">
        <JTable :data="tableList">
          <JTableColums label="报销金额" prop="index"/>
          <JTableColums label="项目金额" prop="name"/>
          <JTableColums label="匹配金额" prop="price"/>
          <JTableColums label="其他金额" prop="num"/>
        </JTable>
        <div class="formCell">
          <p class="form-label">发票：</p>
          <p class="form-desc blue">预览</p>
        </div>
        <div class="formCell">
          <p class="form-label">凭证：</p>
          <p class="form-desc blue">预览</p>
        </div>
        <div class="formCell">
          <p class="form-label">用途：</p>
          <p class="form-desc">用途</p>
        </div>
        <div class="formCell">
          <p class="form-label">摘要：</p>
          <p class="form-desc">摘要</p>
        </div>
      </Collaspe>
    </div>

    <div class="btn">
      <button @click="show=true">审核</button>
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
import JInput from '@/components/input/j-input'
import CTitle from '@/components/title/title'
import Collaspe from '@/components/collaspe/collaspe'
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
import Popup from '@/components/popup/popup2'
export default {
  name: 'ReimbursementAuditDetail',
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
        }
      ],
      form: {
        pass: ''
      }
    }
  },
  components: {
    JInput,
    CTitle,
    Collaspe,
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
.ReimbursementAuditDetail
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
  .content
    margin-top 10px
    .wrapper
      background white
      padding 15px 10px
      margin-top 1px
      .wrapper-title
        font-size: 14px;
        color: #333333;
      .wrapper-desc
        margin-top 15px
        font-size: 12px;
        color: #999999;
        line-height 16px
    .history
      padding 10px 0
      p
        font-size: 13px;
        color: #555555;
      .time
        margin 10px 0 7px 10px
        .time-icon
          background #45C186
          display inline-block
          color white
          border-radius 50%
          font-size 10px
        .date
          font-size: 14px;
          color: #999999;
          margin-left 10px
      .history-wrapper
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        padding 0 10px 10px 10px
        margin-left 37px
        p
          padding-top 10px
          font-size: 14px;
          color: #333333;
          &.black
            font-size: 16px
    .formCell
      background white
      margin-top 2px
      align-items center
      height 30px
      padding 0 10px
      p
        font-size: 14px;
        color: #333333;
      .blue
        color #2873FF
  .btn
    text-align center
    margin-top 20px
    button
      background #2873FF
      border-radius: 6px;
      color white
      width 100px
      height 30px
.popup-form
  padding 0 15px
  display flex
  justify-content space-between
  margin-top 10px
  .form-label
    font-size: 14px;
    color: #333333
    display inline-block
    line-height 30px
  textarea
    border: 1px solid #2873FF;
    width 74%
    box-sizing border-box
    font-size: 14px
    padding 5px
    border-radius: 4px;
    height 95px
  .J-input
    border-radius: 4px;
    font-size: 14px
    border: 1px solid #2873FF;
    height 26px
    box-sizing border-box
    width 74%
.button-cell
  font-size: 14px
  margin-top 10px
.ReimbursementAuditDetail >>> .j-table
    table
      table-layout:fixed;
      th
        font-size 14px
</style>
