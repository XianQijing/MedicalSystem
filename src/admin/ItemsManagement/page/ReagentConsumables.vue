// 试剂耗材
<template>
  <div class="ReagentConsumables">
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
          项目名称
        </p>
        <span>产品名称</span>
        <span>采购总价：2837.00</span>
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
  name: 'ReagentConsumables',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室', '审核状态'],
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
      this.$router.push({name: 'ConsumablesAudit', query: {msg: msg}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ReagentConsumables
  padding-bottom .3rem
  margin 0 .06rem
</style>
