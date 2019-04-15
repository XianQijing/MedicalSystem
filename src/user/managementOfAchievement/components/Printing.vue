// 打印
<template>
  <div class="Printing">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :aType="item.type"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
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
        <button slot="button" class="abtn" @click="jump">查看</button>
        <button slot="button" class="abtn" @click="jump">重新打印</button>
      </div>
    </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
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
    Card,
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
@import '../../../common/style/mixin.styl'
.Printing >>> .comTitle
  margin 0
.Printing
  padding-bottom 20px
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
      &:last-child
        margin-left 5px
        font-size: 14px;
        color: #2873FF;
        background: #C6DAFF;
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
      font-weight 700
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
