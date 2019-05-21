// 执行列表
<template>
  <div class="ExecutionList">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :time="item.time"
        :status="item.type"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">项目名称</span>
        <JTable :data="item.list">
          <TableColums label="专利申请费" prop="w"/>
          <TableColums label="专利奖励费" prop="z"/>
          <TableColums label="专利维护费" prop="j"/>
        </JTable>
        <div class="two">
          <span>专利权利人：陈阿斌</span>
          <span>专利类别：发明专利</span>
        </div>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
        </div>
      </card>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'ExecutionList',
  data () {
    return {
      textList: ['时间范围'],
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
      this.$router.push({name: 'AProjectMessage'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ExecutionList
  .card
    .two
      display flex
      justify-content space-between
    .j-table
      font-size 12px
      margin-bottom 15px
</style>
