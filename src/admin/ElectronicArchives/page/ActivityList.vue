<template>
  <div class="jumpPage">
    <CTitle :screen="true" :textList="textList">课题列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p class="black border-1pxTop">申请人-所属单位</p>
      <span>项目类别</span>
      <span>主办学科、参加对象、项目级别</span>
      <div class="formCell">
        <span>参加人数：23</span>
        <span>外院人数：19</span>
        <span>外省人数：3</span>
      </div>
      <div class="formCell">
        <span>是否收费：否</span>
        <span>收费标准：10</span>
        <span>收费总额：60</span>
      </div>
      <span class="resTime">时间范围:</span>
      <span class="resTime">举办地点:</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">档案列表</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'JumpPage',
  data () {
    return {
      msg: '',
      textList: ['时间范围', '项目类别', '项目计划', '所属科室', '研究类型', '审核状态'],
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
      this.$router.push({name: 'FileList1'})
    }
  },
  created () {
    this.$store.commit('changeTitle', this.$route.query.msg)
  }
}
</script>

<style lang="stylus" scoped>
.jumpPage
  margin 0 .06rem
  .formCell
    span
      flex 1
</style>
