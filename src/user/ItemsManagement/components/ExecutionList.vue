// 执行列表
<template>
  <div class="ExecutionList">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
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
          <button slot="button" class="abtn" @click="jump">查看</button>
        </div>
      </card>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
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
    CTitle,
    Card,
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
.ExecutionList >>> .comTitle
  margin 0
.ExecutionList
  .card
    margin 0 6px
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      // display block
      margin 0 auto
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
    .two
      display flex
      justify-content space-between
    .j-table
      font-size 12px
      margin-bottom 15px
</style>
