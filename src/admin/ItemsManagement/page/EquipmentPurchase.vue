// 仪器设备
<template>
  <div class="EquipmentPurchase">
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
          项目类别
        </p>
        <span>项目计划</span>
        <div class="formCell">
          <span>设备名称：设备名称</span>
          <span>经费额度：0.00</span>
        </div>
        <span class="resTime">批准日期：2018.09.01 12:09</span>
        <div style="text-align:center" v-if="item.type !== '审核中'">
          <JButton type="primary" round @click="jump('查看详情')">查看</JButton>
          <JButton type="primary" round plain>返回上一步</JButton>
        </div>
        <div style="text-align:center" v-if="item.type === '审核中'">
          <JButton type="primary" round @click="jump('交流审核')">审核</JButton>
        </div>
      </card>
      <JButton type="danger" round slot="button" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'EquipmentPurchase',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '审核状态'],
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
    jump (msg) {
      this.$router.push({name: 'PurchaseAudit', query: {msg: msg}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.EquipmentPurchase
  padding-bottom .3rem
  margin 0 .06rem
</style>
