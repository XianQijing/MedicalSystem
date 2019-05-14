// 专利经费
<template>
  <div class="patentFunds">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

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
        <span class="black">申请人-所属单位</span>
        <p class="black border-1pxTop">
          专利名称
        </p>
        <div class="two">
          <span>专利权利人：陈阿斌</span>
          <span>专利类别：发明专利</span>
        </div>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <JTable :data="item.list">
          <TableColums label="专利申请费" prop="w"/>
          <TableColums label="专利奖励费" prop="z"/>
          <TableColums label="专利维护费" prop="j"/>
        </JTable>
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
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'PatentFunds',
  data () {
    return {
      textList: ['时间范围', '成果类别', '所属学科', '审核状态'],
      multiple: [],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          list: [
            {
              z: 2,
              j: 100,
              w: 10
            }
          ]
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          list: [
            {
              z: 2,
              j: 100,
              w: 10
            }
          ]
        }
      ]
    }
  },
  components: {
    Checkall,
    JTable,
    TableColums
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExamineFunds'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.patentFunds
  padding-bottom .3rem
  .two
    display flex
    justify-content space-between
  .j-table
    font-size 12px
    margin-bottom 15px
</style>
