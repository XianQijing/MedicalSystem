<template>
  <div class="fileList">
    <CTitle>课题列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>项目类别</span>
      <div class="formCell">
        <span>原始文件</span>
        <span class="blue">预览</span>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'FileList',
  data () {
    return {
      msg: '',
      textList: ['时间范围', '项目类别', '项目计划', '审核状态'],
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
      this.$router.push({name: 'InformationAudit'})
    }
  },
  mounted () {
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
.fileList
  margin 0 .06rem
  .card
    .blue
      color #2873FF
</style>
