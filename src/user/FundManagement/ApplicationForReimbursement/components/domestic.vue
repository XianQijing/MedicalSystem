<template>
  <div class="wrapper">
    <p class="title">摘要用途</p>
    <div class="item-wrapper border-1px">
      <p class="item-title">一级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">二级科目：</p>
      <JInput v-model="test" placeholder="下拉选择" @click="show=true" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">三级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title">四级科目：</p>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <div class="item-wrapper border-1px">
      <p class="item-title a">用途：</p>
      <textarea placeholder="填写占位"/>
    </div>

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

    <popup position="bottom" v-model="show">
      <van-picker
        :item-height="30"
        :columns="columns"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm" />
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'domestic',
  data () {
    return {
      message: false,
      test: '',
      show: false,
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
      ],
      columns: ['二级科目1', '二级科目2', '二级科目3']
    }
  },
  components: {
    Popup
  },
  methods: {
    onConfirm (val) {
      this.show = false
      this.test = val
      this.message = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl';
.wrapper
  margin-top .10rem
  padding .15rem .10rem 0 .10rem
  background white
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
  .title
    font-size: .14rem;
    color: #333333
  .item-wrapper
    border-1px(#D3D3D3)
    padding .15rem .10rem
    position relative
    &:last-child
      border-none()
    .item-title
      display inline-block
      font-size: .16rem;
      color: #FD4D4D;
      vertical-align top
    .a
      width 8em
      margin-bottom .1rem
    .JRadioGrounp
      display inline-block
      float right
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: .06rem;
      width 1rem
      min-width 100px
      height .30rem
      position absolute
      right 0
      top 8px
      font-size .14rem
    textarea
      border: 1px solid #FD4D4D;
      border-radius: 6px;
      display block
      width 100%
      margin-top .10rem
      padding .10rem
      box-sizing border-box
      height .80rem
      font-size .14rem
  .upload
    border none
    // display inline-block
    width 100%
    text-align center
    height .37rem
    position relative
    input
      border none
      position absolute
      bottom 0
      margin 0
      padding 0
      height .14rem
      width .75rem
      opacity 0
      left 50%
      margin-left -37.5px
      z-index 20
      font-size .14rem
    .text
      position absolute
      font-size .14rem
      color: #2873FF;
      bottom 0
      vertical-align bottom
      width 100%
      text-align center
      img
        width .19rem
        height .19rem
        vertical-align bottom
        margin-right .10rem
.content >>> .card
  .card-white
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  .black1
    font-size .16rem!important
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
