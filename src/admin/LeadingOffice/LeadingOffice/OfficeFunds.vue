<template>
  <div class="OfficeFunds">
    <CTitle :screen="true" :textList="textList">经费使用</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">负责人－所属科室</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目计划</span>
      <span>项目计划</span>
      <p class="border-1pxTop gary">项目经费</p>
      <div class="formCell">
        <span>使用经费：900.00</span>
        <span>可用余额：900.00</span>
      </div>
      <p class="border-1pxTop gary">匹配经费</p>
      <div class="formCell">
        <span>使用经费：900.00</span>
        <span>可用余额：900.00</span>
      </div>
      <p class="border-1pxTop gary">其他经费</p>
      <div class="formCell">
        <span>使用经费：900.00</span>
        <span>可用余额：900.00</span>
      </div>
      <p class="border-1pxTop gary">经费总额</p>
      <div class="formCell">
        <span>使用经费：900.00</span>
        <span>可用余额：900.00</span>
      </div>
      <span class="resTime">审核日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'OfficeFunds',
  data () {
    return {
      textList: ['时间范围', '经费来源', '所属学科'],
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
@import '../../../common/style/mixin.styl'
.OfficeFunds >>> .comTitle
  margin 0
.OfficeFunds
  margin 0 6px
  .card
    .gary
      color #999999!important
      font-size .14rem
</style>
