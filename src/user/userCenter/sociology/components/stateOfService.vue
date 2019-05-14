<template>
  <div class="stateOfService">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      任职登记
    </c-title>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <p class="black border-1pxTop">聘任机构</p>
        <div class="two">
          <span>聘任时间：2018.01</span>
          <span>任职类型：专委会任职</span>
        </div>
        <div class="two">
          <span>任期：0.5</span>
          <span>审核日期：2018.03.13 13:45</span>
        </div>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump('查看详情')">详情</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'StateOfService',
  data () {
    return {
      multiple: [],
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
          type: '通过'
        }
      ],
      textList: ['时间范围', '任职类别', '所属科室', '任职属性', '审核状态']
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'Reviewed', params: {from: '查看'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.stateOfService
  padding-bottom .3rem
  .two
    display flex
    justify-content space-between
    color: #333333;
</style>
