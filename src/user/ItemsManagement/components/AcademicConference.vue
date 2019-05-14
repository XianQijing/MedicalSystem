// 学术会议
<template>
  <div class="AcademicConference">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <!-- <p slot="type" style="height:100%">{{item.type}}</p> -->
      <span class="black">申请人-所属科室</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        会议名称
      </p>
      <span>主办单位</span>
      <div class="formCell">
        <span>经费来源:医院经费</span>
        <span>报销经费:2000</span>
      </div>
      <span class="resTime">会议地点：上海市闸北中兴路778号</span>
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
  name: 'AcademicConference',
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
      this.$router.push({name: 'ExaminFund', query: {msg: '查看详情'}})
      this.$store.commit('changeTitle', '查看详情')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AcademicConference >>> .comTitle
  margin 0
.AcademicConference
  .comTitle
    margin 0
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
      margin-bottom 17px
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
