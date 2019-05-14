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
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p class="black border-1pxTop">课题名称</p>
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
      <JButton type="primary" round @click="jump">详情</JButton>
    </card>
  </div>
</template>

<script>
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
  methods: {
    jump () {
      this.$router.push({name: 'MyFundsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.myFunds
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
