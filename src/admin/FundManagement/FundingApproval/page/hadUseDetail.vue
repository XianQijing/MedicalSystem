<template>
  <div class="hadUseDetail">
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
    <div class="content">
      <Collaspe name="设备费信息">
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
        <div class="formCell">
          <p class="form-label">支出科目:</p>
          <p class="form-desc">支出科目占位</p>
        </div>
        <div class="formCell">
          <p class="form-label">支出金额:</p>
          <p class="form-desc">2000.00元</p>
        </div>
        <div class="formCell">
          <p class="form-label">用途说明:</p>
          <p class="form-desc">用途说明占位</p>
        </div>
        <div class="formCell">
          <p class="form-label">项目余额:</p>
          <p class="form-desc">2000.00元</p>
        </div>
        <div class="formCell">
          <p class="form-label">项目说明:</p>
          <p class="form-desc">项目说明占位项目说明占位项目说明占位项目说明占位项目说明占位项目说明占位</p>
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
  name: 'hadUseDetail',
  data () {
    return {
      clickTab: 0,
      show: false,
      selected: false,
      tableList: [
        {
          index: 3000,
          name: '300',
          price: '300',
          num: 30,
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
@import '../../../../common/style/mixin.styl'
.hadUseDetail
  padding .10rem .06rem
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom .02rem
    div
      // height 166px
    .base-left
      background white
      padding .10rem
      box-sizing border-box
      margin-right .02rem
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
      flex 2 1 240px
      .form-cell
        form-cell-left(.12rem)
        margin-bottom .02rem
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
  .content
    margin-top .10rem
    .wrapper
      background white
      padding .15rem .10rem
      margin-top 1px
      .wrapper-title
        font-size: .14rem;
        color: #333333;
      .wrapper-desc
        margin-top .15rem
        font-size: .12rem;
        color: #999999;
        line-height .16rem
    .history
      padding .10rem 0
      p
        font-size: .13rem;
        color: #555555;
      .time
        margin .10rem 0 .07rem .10rem
        .time-icon
          background #45C186
          display inline-block
          color white
          border-radius 50%
          font-size .10rem
        .date
          font-size: .14rem;
          color: #999999;
          margin-left .10rem
      .history-wrapper
        background: #FFFFFF;
        box-shadow: 0 .02rem .04rem 0 rgba(0,0,0,0.50);
        padding 0 .10rem .10rem .10rem
        margin-left .37rem
        p
          padding-top .10rem
          font-size: .14rem;
          color: #333333;
          &.black
            font-size: .16rem
    .formCell
      background white
      margin-top .02rem
      // align-items center
      // height .30rem
      padding 0.05rem .10rem
      .form-label
       line-height .2rem
      .form-desc
        max-width 80%
        line-height .2rem
        color #999999
      p
        font-size: .14rem;
        color: #333333;
  .btn
    text-align center
    margin-top .20rem
    button
      background #2873FF
      border-radius: .06rem;
      color white
      width 1.00rem
      height .30rem
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
.hadUseDetail >>> .j-table
    table
      table-layout:fixed;
      th
        font-size .14rem
</style>
