// 我的奖励
<template>
  <div class="myReward">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      奖励列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <span>完成人姓名-完成人属性、完成人单位、排名</span>
      <p style="padding: 15px 0" class="black border-1pxTop">专利名称</p>
      <span>专利号</span>
      <div class="three">
        <span>奖励名称：奖励名称</span>
        <span>奖励类别：奖励类别一</span>
      </div>
      <span class="reset">审核日期：2018.04.22</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyReward',
  data () {
    return {
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
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围', '成果类别', '人员属性', '奖励类别', '奖励等级']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'RewardDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.myReward
  .reset
    font-size: 12px;
    color: #999999;
  .three
    display flex
    justify-content space-between
    span
      font-size: 13px;
      color: #333333;
</style>
