// 会议查询
<template>
  <div class="Expense">
    <CTitle :screen="true" :textList="textList">介绍信列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属科室</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        会议名称
        <span class="did">已打印</span>
      </p>
      <span>交流论文题目、主办单位</span>
      <span class="resTime">会议地点：上海市闸北中兴路778号</span>
      <span class="resTime">会议时间：2018.09.01 12:09 - 2018.10.01 12:00</span>
      <span class="resTime">审核日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" plain round @click="jump">重新打印</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'Expense',
  data () {
    return {
      textList: ['时间范围', '论文属性', '经费来源', '审核状态', '打印状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExaminFund'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.Expense
    .two
      display flex
      justify-content space-between
  .did
    border: 1px solid #999999;
    border-radius: 4px;
    font-size: 9px!important
    color: #999999!important
    height 20px
    width 36px
    line-height 20px
    float right
    text-align center
</style>
