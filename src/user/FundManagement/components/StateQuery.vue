// 审核状态查询
<template>
  <div class="StateQuery">
    <div v-show="printing">
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          论文题目
          <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span>
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div class="two">
          <span>财务编号：01983</span>
          <span>报销额度：1000.00</span>
        </div>
        <span class="resTime">批准日期：2018.09.01 12:00</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">查看</button>
          <button slot="button" class="abtn" @click="printing = false">打印</button>
        </div>
      </card>
    </div>

    <StatusPrinting v-show="!printing" v-model="printing"/>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import StatusPrinting from './StatusPrinting'
export default {
  name: 'StateQuery',
  data () {
    return {
      printing: true,
      textList: ['时间范围', '类别选择', '项目类别', '项目计划', '审核状态', '打印状态'],
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
    Card,
    StatusPrinting
  },
  methods: {
    jump () {
      this.$router.push({name: 'StatusSearch'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.StateQuery >>> .comTitle
  margin 0
.StateQuery
  padding-bottom 20px
  .card
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
      &:last-child
        margin-left 5px
        font-size: 14px;
        color: #2873FF;
        background: #C6DAFF;
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
    .two
      display flex
      justify-content space-between
</style>
