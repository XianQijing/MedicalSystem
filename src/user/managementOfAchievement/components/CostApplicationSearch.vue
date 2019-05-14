// 版面费查询及打印
<template>
  <div class="CostApplicationSearch">
    <CTitle :screen="true" :textList="textList">介绍信列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p class="black border-1pxTop">
        论文题目
        <span class="did">已打印</span>
      </p>
      <span>论文类别、期刊名</span>
      <div class="two">
        <span>报销金额：200.00</span>
        <span>经费来源：医院经费</span>
      </div>
      <span class="resTime">审核时间：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain @click="jump">重新打印</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'CostApplicationSearch',
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
      this.$router.push({name: 'CostApplicationDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.CostApplicationSearch
  .card
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
