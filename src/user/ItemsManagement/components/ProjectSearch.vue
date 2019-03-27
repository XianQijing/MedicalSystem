// 项目查询
<template>
  <div class="ProjectSearch">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>主办学科、参加对象、项目级别</span>
      <div class="formCell">
        <span>参加人数:23</span>
        <span>外院人数:19</span>
        <span>外省人数：3</span>
      </div>
      <div class="formCell">
        <span>参加人数:23</span>
        <span>外院人数:19</span>
        <span>外省人数：3</span>
      </div>
      <span class="resTime">批准日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <button slot="button" class="abtn" @click="jump">查询</button>
      </div>
    </card>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
export default {
  name: 'ProjectSearch',
  data () {
    return {
      textList: ['时间范围'],
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
    CTitle,
    Card
  },
  methods: {
    jump (msg) {
      this.$router.push({name: 'ProjectSearchDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectSearch
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
      &.btn
        margin-left 5px
        font-size: 14px;
        color: #2873FF;
        background: #C6DAFF;
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
</style>
