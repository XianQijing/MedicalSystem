// 我的申报
<template>
  <div class="myDeclare">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      申报列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :aType="item.type"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p style="padding: 15px 0" class="black border-1pxTop">项目名称</p>
      <span>15221135677、硕士研究生</span>
      <span>项目计划占位</span>
      <span class="resTime">时间范围：2018.04.01 00：00 - 2018.06.01 00：00</span>
      <button slot="button" class="abtn" @click="jump">详情</button>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
export default {
  name: 'MyDeclare',
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
      textList: ['时间范围', '科研课题', '项目类别', '项目计划']
    }
  },
  components: {
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myDeclare
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
      margin-bottom 17px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
    .resTime
      font-size: 12px;
      color: #999999;
    .button
      height 30px
</style>
