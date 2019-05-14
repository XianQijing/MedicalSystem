// 打印
<template>
  <div class="Printing">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p class="black border-1pxTop">
        专利名称
        <span class="did">已打印</span>
      </p>
      <span>专利类型、经费来源</span>
      <JTable :data="item.list">
        <TableColums label="专利申请费" prop="w"/>
        <TableColums label="专利奖励费" prop="z"/>
        <TableColums label="专利维护费" prop="j"/>
      </JTable>
      <span class="resTime">审核时间：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain @click="jump">重新打印</JButton>
      </div>
    </card>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'Printing',
  data () {
    return {
      textList: ['时间范围', '成果类别', '所属学科', '审核状态'],
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
    JTable,
    TableColums
  },
  methods: {
    jump () {
      this.$router.push({name: 'PrintingDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.Printing
  .card
    .two
      display flex
      justify-content space-between
    .j-table
      font-size 12px
      margin-bottom 15px
  .did
    border: 1px solid #999999;
    border-radius: 4px;
    font-size: 9px!important
    color: #999999!important
    height 20px
    width 36px
    line-height 20px
    float right
    text-align center
</style>
