// 经费明细
<template>
  <div class="FundingDetails">
    <CTitle :screen="true" :textList="textList">经费明细列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        论文题目
      </p>
      <span>项目类别</span>
      <span>项目计划</span>
      <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'FundingDetails',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室'],
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
      this.$router.push({name: 'WatchFundingDetails'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.FundingDetails
    margin 0 .06rem
</style>
