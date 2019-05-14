<template>
  <div class="InventionPatent">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span class="black border-1pxTop">专利名称</span>
      <span>专利号</span>
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
  name: 'InventionPatent',
  data () {
    return {
      msg: '',
      textList: ['时间范围', '成果类别', '所属学科', '审核状态'],
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
.InventionPatent
  margin 0 .06rem
</style>
