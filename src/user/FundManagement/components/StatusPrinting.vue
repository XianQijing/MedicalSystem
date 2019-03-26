// 审核状态查询--打印
<template>
  <div class="StatusPrinting">
    <div class="formCell">
      <p class="form-label">项目名称:</p>
      <p class="form-desc">项目名称</p>
    </div>
    <div class="formCell">
      <p class="form-label">立项时间:</p>
      <p class="form-desc">2018.09.01</p>
    </div>
    <CTitle>学术论文列表</CTitle>

    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        type="selection"
        :data="item"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p style="padding: 15px 0" class="black">
          论文题目
          <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span>
        </p>
        <span>论文属性、期刊名称</span>
        <div class="two">
          <span>支出金额：200.00</span>
          <span>经费归属：项目经费</span>
        </div>
      </card>
      <button slot="button" class="delete" @click="stop('删除')">打印</button>
    </checkall>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'StatusPrinting',
  data () {
    return {
      multiple: [],
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
          type: '审核中',
          dayin: '已打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中',
          dayin: '已打印'
        }
      ]
    }
  },
  props: {
    value: {
      type: Boolean
    }
  },
  components: {
    CTitle,
    Card,
    Checkall
  },
  methods: {
    stop () {
      this.$emit('input', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.StatusPrinting >>> .comTitle
  margin 0
.StatusPrinting
  .checkAll
    margin 0 6px
    .did
      border: 1px solid #999999;
      border-radius: 4px;
      font-size: 9px!important
      color: #999999
      height 20px
      width 36px
      line-height 20px
      float right
      text-align center
      &.not
        color: #FFFFFF;
        background: #555555;
        border none
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      // display block
      margin 0 auto
      &.btn
        margin-left 5px
        font-size: 14px;
        color: #2873FF;
        background: #C6DAFF;
    .no, .user
        padding-left 10px
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    .no
      border-1pxLeft(#D3D3D3)
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 17px
    .black
      font-weight 700
      font-size: 16px
    .resTime
      font-size: 12px;
      color: #999999;
    .two
      display flex
      justify-content space-between
  .delete
    width 58px
    color white
    height 30px
    background: #2873FF;
    font-size 14px
  .formCell
    padding 0 10px
    background white
    height 30px
    align-items center
    font-size: 14px;
    color: #333333;
    .form-desc
      font-size: 14px;
      color: #999999;
    &:first-child
      margin-bottom 2px
      margin-top 10px
</style>
