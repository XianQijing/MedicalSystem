<template>
  <div class="searchType">
    <CTitle :screen="true" :textList="textList">审核列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人</span>
      <p class="black border-1pxTop">经费类别、经费属性</p>
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
export default {
  name: 'searchType',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室', '审核状态'],
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
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'FundingAuditDetail'})
    }
  }
}
</script>
