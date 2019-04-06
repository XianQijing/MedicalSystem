<template>
  <div class="fileList">
    <CTitle>课题列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
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
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
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
  components: {
    CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'InformationAudit'})
    }
  },
  mounted () {
    // document.title = this.$route.query.msg + '活动'
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.fileList
  margin 0 6px
  .comTitle
    margin 0
  .card
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      margin 0 auto
      &.blue
        background #C6DAFF
        color:rgba(40,115,255,1);
        margin-left 10px
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
      padding-top 15px
    .resTime
      font-size: 12px;
      color: #999999;
    .blue
      color #2873FF
</style>
