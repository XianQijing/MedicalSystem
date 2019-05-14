<template>
  <div class="SocialService">
    <CTitle :screen="true" :textList="textList">任职列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p class="black border-1pxTop">专利名称</p>
      <span>专利号</span>
      <div class="formCell">
        <span>专利权利人：陈阿斌</span>
        <span>专利类别：发明专利</span>
      </div>
      <div class="formCell">
        <span>专利权利人：陈阿斌</span>
        <span>专利类别：发明专利</span>
      </div>
      <span class="resTime">审核日期:</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">档案列表</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'SocialService',
  data () {
    return {
      msg: '',
      textList: ['时间范围', '任职类型', '所属科室', '任职属性', '审核状态'],
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
      multiple: []
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'FileList1'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.SocialService
  margin 0 .06rem
</style>
