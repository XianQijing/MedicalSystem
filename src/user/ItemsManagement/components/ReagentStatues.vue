// 试剂耗材--状态查询及打印
<template>
  <div class="ReagentStatues">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        实验名称
        <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span>
      </p>
      <span>课题名称</span>
      <span>支付费用：121.00</span>
      <span class="resTime">使用时间：2018.09.01 12:00</span>
      <span class="resTime">批准日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain>再次打印</JButton>
      </div>
    </card>

  </div>
</template>

<script>
export default {
  name: 'ReagentStatues',
  data () {
    return {
      textList: ['时间范围', '审核状态', '打印状态'],
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
      this.$router.push({name: 'ReagentStatuesDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ReagentStatues
  padding-bottom 20px
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
        color: #FFFFFF;
        background: #555555;
        border none
</style>
