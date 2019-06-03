// 事项申请
<template>
  <div class="ApplicationForMatters">
    <div class="wrapper">
      <JInput type="select" placeholder="类别下拉选择"></JInput>
      <JInput type="select" placeholder="项目下拉选择"></JInput>
    </div>
    <div class="s shuo wrapper">
      <div class="formCell">
        <span>项目编号：29382</span>
        <span>财务编号：92873</span>
      </div>
      <p class="black border-1px">项目负责人-所属科室</p>
      <p class="black">项目名称</p>
      <p>项目类别-项目计划</p>
      <div class="formCell">
        <p>项目总额：20000.00</p>
        <p>项目余额：20000.00</p>
      </div>
    </div>

    <CTitle>经费审批申请</CTitle>
    <div class="wrapper shuo" style="padding-top: 0;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);">
      <p class="title">经费审批申请</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">支出金额（元）：</p>
        <JInput placeholder="填写金额"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">支出科目：</p>
        <div class="two">
          <JInput placeholder="填写内容" v-model="one" @click="open('one')" type="select"/>
          <JInput placeholder="填写内容" v-model="two" @click="open('two')" type="select"/>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">支付形式：</p>
        <JRadioGrounp v-model="radio">
          <JRadio name="0">已预算</JRadio>
          <JRadio name="1">未预算</JRadio>
        </JRadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">报销详细说明：</p>
        <textarea placeholder="填写支出说明"></textarea>
      </div>
    </div>
    <div style="text-align:center">
      <JButton type="primary" round @click="jump">确认提交</JButton>
    </div>

    <popup position="bottom" v-model="show">
      <van-picker
        :item-height="30"
        :columns="columns"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm" />
    </popup>

    <Popup title="经费信息" position="center" v-model="message">
      <div class="content">
        <CTitle>经费报销申请</CTitle>
        <table cellspacing="0">
          <tr class="bottom">
            <th>经费总额</th>
            <th>项目经费</th>
            <th>匹配经费</th>
            <th>其他经费</th>
          </tr>
          <tr class="move">
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>2000.00</td>
          </tr>
        </table>
        <table cellspacing="0" class="tableTop">
          <tr class="bottom">
            <th>经费总额</th>
            <th>项目经费</th>
            <th>匹配经费</th>
            <th>其他经费</th>
          </tr>
          <tr class="move">
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td></td>
          </tr>
        </table>
        <CTitle>科研管理费计算依据和说明</CTitle>
        <p class="content-desc">科研管理费计算依据和说明占位</p>
        <CTitle>科研管理费历史支出</CTitle>
        <card
          v-for="(item, index) in messageList"
          :key="index"
          :time="item.time"
          >
          <span class="black1">摘要占位</span>
          <span>用途说明</span>
          <span>经费归属：项目经费</span>
          <p class="zhichu">支出金额：300.00</p>
        </card>
      </div>
    </Popup>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
import Popup from '@/components/popup/popup2'
export default {
  namw: 'ApplicationForMatters',
  data () {
    return {
      radio: '0',
      one: '',
      two: '',
      show: false,
      message: false,
      model: 'one',
      icon: require('../../../common/image/upload.png'),
      columns: ['一级科目', '一级科目', '一级科目'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ]
    }
  },
  components: {
    JRadio,
    JRadioGrounp,
    Popup
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplicationPort'})
    },
    onConfirm (val) {
      this.show = false
      this[this.model] = val
      if (this.model === 'two') {
        this.message = true
      }
    },
    open (msg) {
      this.show = true
      this.model = msg
      if (msg === 'one') {
        this.columns = ['一级科目', '一级科目', '一级科目']
      } else {
        this.columns = ['二级科目', '二级科目', '二级科目']
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationForMatters
  .JRadio
    font-size .14rem
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding .10rem .10rem 0 .10rem
    margin-bottom .10rem
    &.shuo
      box-shadow none
    .title
      font-size .14rem;
      color: #333333;
    p
      font-size: .14rem;
      color: #333333;
      padding-top .15rem
    .black
      font-size .16rem
      font-weight 700
      &.border-1px
        padding-bottom .15rem
        border-1px(#D3D3D3)
    span
      font-size: .12rem;
      color: #555555;
    &:first-child
      margin-top .04rem
      padding-bottom .10rem
      display flex
      justify-content space-between
    &.s
      margin 0
      padding-bottom .10rem
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: .06rem;
      width 1.64rem
      display inline-block
      height .30rem
    .item-wrapper
      padding 0 .10rem .15rem .10rem
      position relative
      border-1px(#D3D3D3)
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: .16rem;
        color: #FD4D4D;
        vertical-align top
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top .1rem
        padding .06rem .1rem
        box-sizing border-box
        height .80rem
        font-size .14rem
      .JRadioGrounp
        display inline-block
        position absolute
        top 50%
        right 0
        margin-top -7px
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: .06rem;
        width 1rem
        min-width 1.00rem
        height .30rem
        position absolute
        right 0
        top .08rem
        &:first-child
          right 1.03rem
.J-input
  font-size .14rem
.content
  margin 0 .1rem
  table
    width 100%
    border-collapse:separate
    text-align center
    font-size: 14px;
    font-weight 400
    table-layout fixed
    &.tableTop
      margin-top .1rem
    .bottom
      background: #003BAA;
      th
        padding-bottom 13px
        padding-top 13px
        color white
        font-weight 400
    .move
      width 100%
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
      td
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
  .content-desc
    font-size .14rem
  .zhichu
    font-size .14rem
</style>
