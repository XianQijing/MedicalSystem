// 状态查询及打印
<template>
  <div class="PritinApply">
    <div>
      <CTitle :screen="true" :textList="textList">打印申请列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <p class="black border-1pxTop">
          项目名称
          <!-- <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span> -->
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div class="two">
          <span>财务编号：01983</span>
          <span>申请额度：1000.00.00</span>
        </div>
        <span class="resTime">批准日期：2018.09.01 12:00</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">打印</JButton>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PritinApply',
  data () {
    return {
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
  methods: {
    jump () {
      // this.$router.push({name: 'StateSearchDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.PritinApply
  .card
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
        color: #FFFFFF!important
        background: #555555;
        border none
    .two
      display flex
      justify-content space-between
</style>
