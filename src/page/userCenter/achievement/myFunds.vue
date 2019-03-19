// 我的经费
<template>
  <div class="myFunds">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      经费列表
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
      <p style="padding: 15px 0" class="black border-1pxTop">课题名称</p>
      <span>测试课题</span>
      <span style="line-height: 1.3em">项目计划占位项目计划占位项目计划占位项目计划占位项目计划占位</span>
      <table>
        <tr>
          <th>项目经费</th>
          <th>匹配经费</th>
          <th>其他经费</th>
          <th>经费总额</th>
          <th>剩余总额</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
      <button slot="button" class="abtn" @click="jump">详情</button>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import CTitle from '@/components/title/title'
export default {
  name: 'MyFunds',
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
    CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'MyFundsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myFunds
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
    table
      width 100%
      text-align center
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      margin-bottom 10px
      th
        background: #003BAA;
        height 40px
        font-size: 12px;
        color: #FFFFFF;
      tr
        font-size: 12px;
        color: #999999;
        height 26px
</style>
