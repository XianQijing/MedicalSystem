<template>
  <div class="Leading">
    <CTitle :screen="true" :textList="textList">科研项目</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <!-- <p slot="type" style="height:100%">{{item.type}}</p> -->
      <span class="black">负责人－所属科室</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>项目类别</span>
      <span>项目计划</span>
      <span class="resTime">结题项目时间范围：2017.08.12 - 2018.09.01</span>
      <table>
        <tr>
          <th>项目余额</th>
          <th>匹配余额</th>
          <th>其他余额</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
      <div style="text-align:center">
        <button slot="button" class="abtn" @click="jump">查看</button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
export default {
  name: 'Leading',
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
      this.$router.push({name: 'DeclareDetail', query: {msg: '查看详情'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Leading >>> .comTitle
  margin 0
.Leading
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
  table
    width 100%
    text-align center
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    margin-bottom 10px
    th
      background #003baa
      height 40px
      color white
      font-size 12px
    td
      height 26px
      font-size 12px
      color #999
</style>
