// 项目经费--详情
<template>
  <div class="ProjectFundsDetail">
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
      <Collaspe name="第一期经费额度">
      <div class="wrapper">
        <div class="formCell">
          <p class="form-label">项目经费：</p>
          <p class="form-msg">2000.00</p>
        </div>
        <div class="formCell">
          <p class="form-label">到款时间：</p>
          <p class="form-msg">2018.09.01 12:23:31</p>
        </div>
        <div class="formCell none">
          <p class="form-label">入账时间：</p>
          <p class="form-msg">2018.09.01 12:23:31</p>
        </div>
        <div class="button">
          <button>管理费提取</button>
          <button>及消费提取</button>
        </div>
      </div>
      <div class="wrapper">
        <div class="formCell">
          <p class="form-label">项目经费：</p>
          <p class="form-msg">2000.00</p>
        </div>
        <div class="formCell">
          <p class="form-label">到款时间：</p>
          <p class="form-msg">2018.09.01 12:23:31</p>
        </div>
        <div class="formCell none">
          <p class="form-label">入账时间：</p>
          <p class="form-msg">2018.09.01 12:23:31</p>
        </div>
        <div class="button">
          <button>管理费提取</button>
          <button>及消费提取</button>
        </div>
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
import Collaspe from '@/components/collaspe/collaspe'
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
import Popup from '@/components/popup/popup2'
export default {
  name: 'ProjectFundsDetail',
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
.ProjectFundsDetail
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
      border-radius 6px
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      overflow hidden
      margin-top 4px
      .formCell
        background white
        height 28px
        align-items center
        // margin-top 2px
        align-items center
        height 30px
        margin 0 10px
        border-bottom 1px solid #d3d3d3
        &.none
          border none
        p
          font-size: 14px;
          color: #333333;
        .form-msg
          font-size: 12px;
          color: #333333;
          font-weight 700
        .blue
          color #2873FF
      .button
        button
          width 49.4%
          box-sizing border-box
          color #2873FF
          background none
          font-weight 700
          height 30px
          &:first-child
            border-right 1px solid #d3d3d3
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
.ProjectFundsDetail >>> .j-table
    table
      table-layout:fixed;
      th
        font-size 14px
</style>
