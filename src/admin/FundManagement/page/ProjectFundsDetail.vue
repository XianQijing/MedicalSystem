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
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>00902</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>2938492</p>
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
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>1年</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>2018.10.12</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input blue"><IconSvg iconClass="icon-bianjiicon"/>状态1</p>
        </div>
      </div>
    </div>
    <div class="content">
      <Collaspe name="第一期经费额度">
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">项目经费：</p>
            <JInput v-model="xiangmu"/>
          </div>
          <div class="formCell">
            <p class="form-label">到款时间：</p>
            <p class="form-msg" @click="openTime('daokuan')">{{daokuan}}</p>
          </div>
          <div class="formCell none">
            <p class="form-label">入账时间：</p>
            <p class="form-msg" @click="openTime('ruzhang')">{{ruzhang}}</p>
          </div>
          <div class="button">
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">匹配经费：</p>
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
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
      </Collaspe>
      <Collaspe name="第二期经费额度">
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">项目经费：</p>
            <JInput v-model="xiangmu"/>
          </div>
          <div class="formCell">
            <p class="form-label">到款时间：</p>
            <p class="form-msg" @click="openTime('daokuan')">{{daokuan}}</p>
          </div>
          <div class="formCell none">
            <p class="form-label">入账时间：</p>
            <p class="form-msg" @click="openTime('ruzhang')">{{ruzhang}}</p>
          </div>
          <div class="button">
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">匹配经费：</p>
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
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
      </Collaspe>
      <Collaspe name="第三期经费额度">
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">项目经费：</p>
            <JInput v-model="xiangmu"/>
          </div>
          <div class="formCell">
            <p class="form-label">到款时间：</p>
            <p class="form-msg" @click="openTime('daokuan')">{{daokuan}}</p>
          </div>
          <div class="formCell none">
            <p class="form-label">入账时间：</p>
            <p class="form-msg" @click="openTime('ruzhang')">{{ruzhang}}</p>
          </div>
          <div class="button">
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">匹配经费：</p>
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
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
      </Collaspe>
      <Collaspe name="第四期经费额度">
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">项目经费：</p>
            <JInput v-model="xiangmu"/>
          </div>
          <div class="formCell">
            <p class="form-label">到款时间：</p>
            <p class="form-msg" @click="openTime('daokuan')">{{daokuan}}</p>
          </div>
          <div class="formCell none">
            <p class="form-label">入账时间：</p>
            <p class="form-msg" @click="openTime('ruzhang')">{{ruzhang}}</p>
          </div>
          <div class="button">
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">匹配经费：</p>
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
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
      </Collaspe>
      <Collaspe name="第五期经费额度">
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">项目经费：</p>
            <JInput v-model="xiangmu"/>
          </div>
          <div class="formCell">
            <p class="form-label">到款时间：</p>
            <p class="form-msg" @click="openTime('daokuan')">{{daokuan}}</p>
          </div>
          <div class="formCell none">
            <p class="form-label">入账时间：</p>
            <p class="form-msg" @click="openTime('ruzhang')">{{ruzhang}}</p>
          </div>
          <div class="button">
            <button>管理费提取</button><button>绩效费提取</button>
          </div>
        </div>
        <div class="wrapper">
          <div class="formCell">
            <p class="form-label">匹配经费：</p>
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
            <button>管理费提取</button><button>绩效费提取</button>
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

    <popup position="bottom" v-model="time">
      <van-datetime-picker
        @confirm="timeConfirm"
        type="datetime"
        :min-date="minDate"
        :item-height="30"
        @cancel="time = false"
      />
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
      model: '',
      show: false,
      selected: false,
      time: false,
      minDate: new Date(),
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
      },
      daokuan: '2018.09.01 12:23:31',
      xiangmu: '2000.00',
      ruzhang: '2018.09.01 12:23:31'
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
    },
    timeConfirm (val) {
      const year = val.getFullYear()
      const month = (val.getMonth() + 1).toString().split('').length > 1 ? val.getMonth() + 1 : `0${val.getMonth() + 1}`
      const date = val.getDate().toString().split('').length > 1 ? val.getDate() : `0${val.getDate()}`
      const hours = val.getHours().toString().split('').length > 1 ? val.getHours() : `0${val.getHours()}`
      const Minutes = val.getMinutes().toString().split('').length > 1 ? val.getMinutes() : `0${val.getMinutes()}`
      const Seconds = val.getSeconds().toString().split('').length > 1 ? val.getSeconds() : `0${val.getSeconds()}`
      this[this.model] = `${year}.${month}.${date} ${hours}:${Minutes}:${Seconds}`
      this.time = false
    },
    openTime (msg) {
      this.time = true
      this.model = msg
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectFundsDetail
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
      flex 2 1 2.40rem
      .form-cell
        form-cell-left(.12rem)
        height .26rem
        margin-bottom 2px
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
          &.blue
            color #2873FF
  .content
    margin-top .10rem
    .wrapper
      background white
      border-radius .06rem
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      overflow hidden
      margin-top .04rem
      .formCell
        background white
        height .28rem
        align-items center
        // margin-top 2px
        align-items center
        height .30rem
        margin 0 .10rem
        border-bottom 1px solid #d3d3d3
        &.none
          border none
        p
          font-size: .14rem;
          color: #333333;
        .form-msg
          font-size: .12rem;
          color: #333333;
          font-weight 700
        .blue
          color #2873FF
        .J-input
          font-size .12rem
      .button
        button
          width 49.4%
          box-sizing border-box
          color #2873FF
          background none
          font-weight 700
          height .30rem
          font-size .14rem
          &:first-child
            border-right 1px solid #d3d3d3
  .btn
    text-align center
    margin-top .20rem
    button
      font-size .14rem
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
.svg-icon
  font-size .1652rem
.ProjectFundsDetail .content >>> .J-input
  padding 0
  font-weight 700
  .ss
    input
      text-align right
</style>
