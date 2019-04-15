// 项目经费
<template>
  <div class="ProjectFunds">
    <div>
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <span class="resTime">项目到款总额：0.00</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">经费录入</button>
        </div>
      </card>
    </div>

  </div>
</template>

<script>
import Card from '@/components/card/card'
export default {
  name: 'ProjectFunds',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '所属科室'],
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
  components: {
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'ProjectFundsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectFunds >>> .comTitle
  margin 0
.ProjectFunds
  padding 0 0 10px 0
  margin 0 6px
  .card
    margin 0 6px
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
      margin-bottom 15px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
</style>
