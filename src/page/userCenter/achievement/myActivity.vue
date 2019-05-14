// 我的活动
<template>
  <div class="myActivity">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      活动列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p class="black border-1pxTop">项目名称</p>
      <span>主办学科、参加对象、项目级别</span>
      <div class="three">
        <span>参加人数：23</span>
        <span>外院人数：19</span>
        <span>外省人数：03</span>
      </div>
      <div class="three">
        <span>是否收费：否</span>
        <span>收费标准：10</span>
        <span>收费总额：60</span>
      </div>
      <span class="reset">时间范围：2018.03.01 00:00 － 2018.04.01 00:00</span>
      <span class="reset">举办地点：举办地点占位</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">详情</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyActivity',
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
      textList: ['时间范围']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ActivityDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.myActivity
  .three
    display flex
    justify-content space-between
    span
      font-size: 13px;
      color: #333333;
</style>
