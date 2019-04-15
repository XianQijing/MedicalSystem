<template>
  <div class="jumpPage">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span class="black border-1pxTop">申请人-所属单位</span>
      <span>项目类别</span>
      <span>项目类别</span>
      <span class="resTime">审核日期:</span>
      <div style="text-align:center">
        <button slot="button" class="abtn" @click="jump">档案列表</button>
      </div>
    </card>
  </div>
</template>

<script>
// import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
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
      ],
      multiple: []
    }
  },
  components: {
    // CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'FileList1'})
    }
  },
  created () {
    document.title = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.jumpPage
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
</style>
