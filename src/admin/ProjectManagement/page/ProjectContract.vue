// 项目合同
<template>
  <div class="ProjectContract">
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <p class="black border-1pxTop">
          论文题目
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div class="two">
          <span>财务编号：01983</span>
          <span>报销额度：1000.00</span>
        </div>
        <span class="resTime">批准日期：2018.09.01 12:00</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" v-if="item.type === '通过'" round plain @click="jump">返回上一步</JButton>
        </div>
      </card>

  </div>
</template>

<script>
export default {
  name: 'ProjectContract',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室', '合同类型', '付款方式', '审核状态'],
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
          type: '审核中',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ContractSearch'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ProjectContract
  margin 0 .06rem
</style>
