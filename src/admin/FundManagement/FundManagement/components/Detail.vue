<template>
  <div class="Detail">
    <CTitle :screen="true" :textList="textList">管理经费</CTitle>
    <JTable :data="tableList">
      <JTableColums label="项目管理费" prop="name"/>
      <JTableColums label="匹配管理费" prop="price"/>
      <JTableColums label="其他管理费" prop="num"/>
      <JTableColums label="管理费总额" prop="index"/>
    </JTable>
    <!--  -->
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人</span>
      <p class="black border-1pxTop">
        经费类别、经费属性
      </p>
      <span>摘要：摘要占位</span>
      <span>报销额度：200.00</span>
      <span class="resTime">审核日期：2018.09.10</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
import Popup from '@/components/popup/popup2'
export default {
  name: 'Detail',
  data () {
    return {
      show: false,
      selected: false,
      clickTab: 0,
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '经费类别', '所属科室'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ],
      tableList: [
        {
          index: 123,
          name: 123,
          price: 123,
          num: 123
        }
      ],
      form: {
        pass: ''
      }
    }
  },
  components: {
    JTable,
    JTableColums,
    Popup
  },
  methods: {
    jump () {
      this.$router.push({name: 'FundingAuditDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.Detail
  .j-table
    margin-bottom .1rem
</style>
