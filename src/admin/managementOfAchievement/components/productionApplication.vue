// 成果申报
<template>
  <div class="productionApplication">
    <CTitle :screen="true" :textList="textList">申报列表</CTitle>

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
        <span class="black">申请人-所属单位</span>
        <span>完成人-完成人属性、完成人单位、单位排名</span>
        <p class="black border-1pxTop">
          成果名称
        </p>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center" v-if="item.type==='通过'">
          <JButton type="primary" round @click="jump('查看详情')">查看</JButton>
          <JButton  type="primary" round plain @click="jump">返回上一步</JButton>
        </div>
        <div style="text-align:center" v-if="item.type!=='通过'">
          <JButton type="primary" round @click="jump('成果审核')">审核</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'ProductionApplication',
  data () {
    return {
      textList: ['时间范围', '成果类别', '所属学科', '审核状态'],
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
      this.$router.push({name: 'AuditResults', query: {msg: msg}})
      this.$store.commit('changeTitle', msg)
    }
  }
}
</script>

<style lang="stylus" scoped>
.productionApplication
  padding-bottom .3rem
  .two
    display flex
    justify-content space-between
</style>
