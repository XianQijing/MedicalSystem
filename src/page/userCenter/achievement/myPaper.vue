// 我的论文
<template>
  <div class="myPaper">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      论文列表
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
      <p style="padding: 15px 0" class="black border-1pxTop">论文名称</p>
      <span>论文属性、SCI类别、刊物名称</span>
      <div class="three">
        <span>卷期：1</span>
        <span>起讫页：1－1</span>
        <span>经费来源：医院经费</span>
      </div>
      <span class="reset">发表时间：2018.09.21</span>
      <button slot="button" class="abtn" @click="jump">详情</button>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import CTitle from '@/components/title/title'
export default {
  name: 'MyPaper',
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
      textList: ['时间范围', '作者属性', '论文属性', '论文类别', '经济来源']
    }
  },
  components: {
    CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'PaperDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myPaper
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
      margin-bottom 10px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
    .button
      height 30px
    .three
      display flex
      justify-content space-between
      span
        font-size: 13px;
        color: #333333;
    .reset
      font-size: 12px;
      color: #999999;
</style>
