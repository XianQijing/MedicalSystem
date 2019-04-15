<template>
  <div class="OfficeFunds">
    <CTitle :screen="true" :textList="textList">经费使用</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no">NO：{{item.name}}</p>
      <!-- <p slot="type" style="height:100%">{{item.type}}</p> -->
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
        <button slot="button" class="abtn" @click="jump">查看</button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
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
  components: {
    Card
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
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      // display block
      margin 0 auto
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 10px
    .black
      margin-top 10px
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
      padding 15px 0
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
    .gary
      color #999999
      font-size 14px
</style>
