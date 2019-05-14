// 经费报销
<template>
  <div class="Expense">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        type="selection"
        :data="item"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属科室</span>
        <p class="black border-1pxTop">
          会议名称
        </p>
        <span>交流论文题目、主办单位</span>
        <div class="formCell">
          <span>经费来源:医院经费</span>
          <span>会议经费(元):2000</span>
        </div>
        <span class="resTime">会议地点：上海市闸北中兴路778号</span>
        <span class="resTime">审核日期：2018.09.01 12:09</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" round plain @click="jump">返回上一步</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'Expense',
  data () {
    return {
      textList: ['时间范围', '经费来源', '所属学科', '审核状态'],
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
        }
      ]
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExaminFund'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.Expense
  padding-bottom .3rem
</style>
