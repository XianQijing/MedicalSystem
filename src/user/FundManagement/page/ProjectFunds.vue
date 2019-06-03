// 项目经费
<template>
  <div class="ProjectFunds">
    <div>
      <CTitle :screen="true" :textList="textList">到款入账列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科</span>
        <p class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span>项目计划占位</span>
        <span class="resTime">项目到款总额：0.00</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
        </div>
      </card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProjectFunds',
  data () {
    return {
      textList: ['时间范围', '类别选择', '项目类别', '项目计划'],
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
      this.$router.push({name: 'ProjectFundsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ProjectFunds
  margin 0 .06rem
</style>
