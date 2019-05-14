// 经费决算
<template>
  <div class="FundsFinalAccounts">
    <div>
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

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
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
        </div>
      </card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FundsFinalAccounts',
  data () {
    return {
      textList: ['时间范围', '类别选择', '项目类别', '项目计划', '所属科室'],
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
      this.$router.push({name: 'FundsFinalAccountsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.FundsFinalAccounts
  margin 0 .06rem
</style>
