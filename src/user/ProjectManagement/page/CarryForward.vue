// 打印
<template>
  <div class="CarryForward">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        专利名称
      </p>
      <span>专利类型、经费来源</span>
      <span class="resTime">审核时间：2018.09.01 12:00</span>
      <JTable :data="item.list">
        <TableColums label="总余额" prop="w"/>
        <TableColums label="项目余额" prop="z"/>
        <TableColums label="匹配余额" prop="j"/>
        <TableColums label="其他余额" prop="q"/>
      </JTable>
      <JTable :data="item.list">
        <TableColums label="论文数" prop="w"/>
        <TableColums label="专利数" prop="z"/>
        <TableColums label="成果数" prop="j"/>
        <TableColums label="获奖数" prop="q"/>
        <TableColums label="著作数" prop="r"/>
      </JTable>
    </card>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'CarryForward',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '学科选择'],
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
              w: 10,
              q: 3,
              r: 4
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
              w: 10,
              q: 3,
              r: 4
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
.CarryForward
  .card
    .two
      display flex
      justify-content space-between
    .j-table
      font-size 12px
      margin-bottom 15px
      &:last-child
        margin-bottom 0
</style>
