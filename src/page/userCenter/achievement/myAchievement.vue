// 我的成功
<template>
  <div class="myAchievement">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      成果列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <span>完成人姓名-完成人属性、完成人单位、排名</span>
      <p style="padding: 15px 0" class="black border-1pxTop">专利名称</p>
      <span>专利号</span>
      <span>颁证机关：机关名称占位</span>
      <span class="reset">审核日期：2018.04.22</span>
      <button slot="button" class="abtn" @click="jump">查看</button>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import CTitle from '@/components/title/title'
export default {
  name: 'MyAchievement',
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
      textList: ['时间范围', '成果类别', '人员属性']
    }
  },
  components: {
    CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'achievementDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myAchievement
  .comTitle
    margin 0
  .card
    margin 0 6px
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      display block
      margin 0 auto
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
    .button
      height 30px
    .reset
      font-size: 12px;
      color: #999999;
</style>
