// 出国交流
<template>
  <div class="GoAbroad">
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
        <span>论文题目、组织单位名称</span>
        <div class="formCell">
          <span class="resTime">经费来源:医院经费</span>
          <span class="resTime">会议经费(元):2000</span>
        </div>
        <span class="resTime">会议地点：会议地点</span>
        <div style="text-align:center" v-if="item.type !== '审核中'">
          <JButton type="primary" round @click="jump('查看详情')">查看</JButton>
          <JButton type="primary" round plain>返回上一步</JButton>
        </div>
        <div style="text-align:center" v-if="item.type === '审核中'">
          <JButton type="primary" round @click="jump('交流审核')">审核</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'GoAbroad',
  data () {
    return {
      textList: ['时间范围', '所属科室', '审核状态'],
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
      this.$router.push({name: 'ExchangeAudit', query: {msg: msg}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.GoAbroad
  padding-bottom .3rem
  margin 0 .06rem
</style>
